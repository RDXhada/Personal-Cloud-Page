import React from 'react';
import messages from '../../messages/messages';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  padding: 20px;
  z-index: 10;
`;

const CloseButton = styled.button`
  background: #3f51b5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  float: right;

  &:hover {
    background: #334296;
  }
`;

const ContentImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  margin-bottom: 10px;
  border-radius: 8px;
`;


const FileContentModal = ({ file, onClose }) => {
  const renderFileContent = (file) => {
    const fileType = file.name.split('.').pop().toLowerCase();

    if (['txt', 'md'].includes(fileType)) {
      const textContent = "This is a simulated text content for " + file.name;
      return <p>{textContent}</p>;
    } else if (['png', 'jpg', 'jpeg', 'gif'].includes(fileType)) {
      const imagePath = require(`../../folders/Images/coolImageOfAGuy.jpg`); 
      return <ContentImage src={imagePath} alt={file.name} />;
    } else {
      return <p>{messages.pages.fileManager.cannotViewContent}</p>;
    }
  };

  return (
    <Wrapper>
      <CloseButton onClick={onClose}>{messages.pages.fileManager.files.closeButton}</CloseButton>
      <h2>{file.name}</h2>
      {renderFileContent(file)}
    </Wrapper>
  );
};

export default FileContentModal;
