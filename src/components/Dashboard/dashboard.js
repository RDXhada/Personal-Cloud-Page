import React from 'react';
import styled from 'styled-components';
import messages from '../../messages/messages';
import { useRecentlyViewed } from '../../providers/RecentlyViewedContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fileIconMapping, fileIconColor } from '../FileManager/iconMapping';

const FileHistoryContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #3f51b5;
  margin-bottom: 15px;
  font-size: 36px;
`;

const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 4px solid #3f51b5;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 3px 4px rgba(0,0,0,0.24);
`;

const FileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const FileCard = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  transition: background-color 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  &:hover {
    background-color: #e6e6e6;
  }
`;

const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileName = styled.span`
  font-weight: 500;
  color: #333;
`;

const FileType = styled.span`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const Icon = styled.div`
  color: ${props => props.color};
  font-size: 24px;
`;

const EmptyFileHistory = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: red;
`;

const FileHistory = () => {
  const { recentlyViewed } = useRecentlyViewed();

  const getFileType = (fileName) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
  };

  return (
    <FileHistoryContainer>
      <Title>{messages.pages.fileHistory.title}</Title>
      <Content>
        <h2>{messages.pages.fileHistory.overview}</h2>
        <FileGrid>
          {recentlyViewed.length > 0 ? (
            recentlyViewed.map((file, index) => {
              const fileType = getFileType(file.name);
              const icon = fileIconMapping[fileType] || fileIconMapping['default'];
              const color = fileIconColor[fileType] || fileIconColor['default'];

              return (
                <FileCard key={index}>
                  <Icon color={color}>
                    <FontAwesomeIcon icon={icon} />
                  </Icon>
                  <FileInfo>
                    <FileName>{file.name}</FileName>
                    <FileType>{fileType.toUpperCase()}</FileType>
                  </FileInfo>
                </FileCard>
              );
            })
          ) : (
            <EmptyFileHistory>{messages.pages.fileHistory.noRecentHistory}</EmptyFileHistory>
          )}
        </FileGrid>
      </Content>
    </FileHistoryContainer>
  );
};

export default FileHistory;
