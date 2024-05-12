import React, { useState, useEffect} from 'react';
import initialFiles from './fileData.json';
import { useRecentlyViewed } from '../../providers/RecentlyViewedContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import messages from '../../messages/messages';
import FileItem from './fileItem';
import PathSegment from './pathSegment';
import FileContentModal from './fileContentModal';
import styled from 'styled-components';
import ContextMenu from './fileContextMenu';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;
`;

const PathContainer = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

const LargeIcon = styled.div`
  font-size: 60px;
  margin-bottom: 8px;
`;

const Text = styled.div`
  margin-top: 10px;
  font-size: 16px;
  word-break: break-word;
  text-align: center;
  color: #333;
`;

const StyledFileItem = styled.div`
  padding: 20px;
  cursor: pointer;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 160px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  &:hover {
    background: #f1f3f4;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #6f42c1;
`;

const FileManager = () => {
  const [currentPath, setCurrentPath] = useState([]);
  const [files, setFiles] = useState(initialFiles);
  const { addToRecentlyViewed } = useRecentlyViewed();
  const [viewingFile, setViewingFile] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Close context menu if clicking outside
    const handleOutsideClick = (event) => {
      if (contextMenu) {
        setContextMenu(null);  // Close the context menu
      }
    };

    // Add when the context menu is visible
    if (contextMenu) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [contextMenu]);

  const getCurrentFiles = (path) => {
    let result = initialFiles;
    for (let index of path) {
      result = result[index].contents;
      if (!result) return [];
    }
    return result;
  };

  const enterDirectory = (index) => {
    const newCurrentPath = [...currentPath, index];
    const newFiles = getCurrentFiles(newCurrentPath);
    setCurrentPath(newCurrentPath);
    setFiles(newFiles);
  };

  const navigateUp = () => {
    if (currentPath.length === 0) return;
    const newCurrentPath = currentPath.slice(0, -1);
    const newFiles = getCurrentFiles(newCurrentPath);
    setCurrentPath(newCurrentPath);
    setFiles(newFiles);
  };

  const navigateTo = (depth) => {
    const newCurrentPath = currentPath.slice(0, depth);
    const newFiles = getCurrentFiles(newCurrentPath);
    setCurrentPath(newCurrentPath);
    setFiles(newFiles);
  };

  const openFile = (file) => {
    if (file.type !== 'directory') {
      addToRecentlyViewed(file);
      setViewingFile(file);
    } else {
      enterDirectory(files.indexOf(file));
    }
  };

  const onContextMenu = (event, file) => {
    event.preventDefault();
    event.stopPropagation(); 
    setContextMenu(file);
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  const handleContextMenuAction = (action) => {
    console.log(`${action} action on file:`, contextMenu);
    // add logic for rename, delete, etc.
  };

  const renderPath = () => {
    let pathSegment = initialFiles;
    return (
      <PathContainer>
        <PathSegment segmentName={messages.pages.fileManager.homePath} onClick={() => navigateTo(0)} />
        {currentPath.map((index, i) => {
          if (i > 0) pathSegment = pathSegment[currentPath[i - 1]].contents;
          const segmentName = pathSegment[index] ? pathSegment[index].name : '...';
          return (
            <React.Fragment key={i}>
              <PathSegment segmentName={segmentName} onClick={() => navigateTo(i + 1)} />
            </React.Fragment>
          );
        })}
      </PathContainer>
    );
  };

  return (
    <Container>
      {renderPath()}
      <GridContainer>
        {currentPath.length > 0 && (
          <StyledFileItem onClick={navigateUp}>
            <LargeIcon><StyledFontAwesomeIcon icon={faArrowLeft} /></LargeIcon>
            <Text>{messages.pages.fileManager.goBack}</Text>
          </StyledFileItem>
        )}
        {files.map((file, index) => (
          <FileItem key={index} file={file} openFile={openFile} onContextMenu={onContextMenu} />
        ))}
      </GridContainer>
      {viewingFile && <FileContentModal file={viewingFile} onClose={() => setViewingFile(null)} />}
      {contextMenu && (
        <ContextMenu
          position={contextMenuPosition}
          onClose={closeContextMenu}
          onAction={handleContextMenuAction}
        />
      )}
    </Container>
  );
};

export default FileManager;