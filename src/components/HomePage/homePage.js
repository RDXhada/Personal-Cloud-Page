import React from "react";
import messages from "../../messages/messages";
import styled from 'styled-components'

const PageContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #3f51b5;
  margin: 0 0 10px 0;
`;

const HomePage = () => (
    <PageContainer>
      <Title>{messages.pages.home.title}</Title>
      <p>{messages.pages.home.welcome}</p>
    </PageContainer>
  );

export default HomePage;