import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FileHistory from './components/Dashboard/dashboard';
import FileManager from './components/FileManager/fileManager';
import { RecentlyViewedProvider } from './providers/RecentlyViewedContext';
import HomePage from './components/HomePage/homePage';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <RecentlyViewedProvider>
    <Router>
      <AppContainer>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/file-history" element={<FileHistory />} />
          <Route path="/file-manager" element={<FileManager />} />
        </Routes>
      </AppContainer>
    </Router>
    </RecentlyViewedProvider>
  );
};

export default App;
