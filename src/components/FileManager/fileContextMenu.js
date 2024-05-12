import React from 'react';
import styled from 'styled-components';
import messages from '../../messages/messages';

const Menu = styled.div`
  position: absolute;
  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  width: 150px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  z-index: 1000;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const ContextMenu = ({ position, onClose, onAction }) => {
  return (
    <Menu position={position}>
      <MenuItem onClick={() => { onAction('rename'); onClose(); }}>{messages.pages.fileManager.contextMenu.rename}</MenuItem>
      <MenuItem onClick={() => { onAction('download'); onClose(); }}>{messages.pages.fileManager.contextMenu.download}</MenuItem>
      <MenuItem onClick={() => { onAction('share'); onClose(); }}>{messages.pages.fileManager.contextMenu.share}</MenuItem>
      <MenuItem onClick={() => { onAction('info'); onClose(); }}>{messages.pages.fileManager.contextMenu.fileInfo}</MenuItem>
      <MenuItem onClick={() => { onAction('delete'); onClose(); }}>{messages.pages.fileManager.contextMenu.delete}</MenuItem>
    </Menu>
  );
};

export default ContextMenu;
