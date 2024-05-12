import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { getFileIcon } from './iconMapping';

const Wrapper = styled.div`
  position: relative; 
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

const Icon = styled.div`
  font-size: 60px; /* Adjust if necessary */
  margin-bottom: 8px;
`;

const Text = styled.div`
  margin-top: 10px;
  font-size: 16px;
  word-break: break-word;
  text-align: center;
  color: #333;
`;

const MenuIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #6f42c1;
  font-size: 20px; 
  cursor: pointer;
  width: 16px;
`;

const FileItem = ({ file, openFile, onContextMenu }) => {
  const { icon, color } = getFileIcon(file);
  
  return (
    <Wrapper onClick={() => openFile(file)}>
      <Icon>
        <FontAwesomeIcon icon={icon} color={color} />
      </Icon>
      <Text>{file.type === 'directory' ? <b>{file.name}/</b> : file.name}</Text>
      <MenuIcon onClick={(e) => { e.stopPropagation(); onContextMenu(e, file); }}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </MenuIcon>
    </Wrapper>
  );
};

export default FileItem;
