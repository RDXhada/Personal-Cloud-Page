import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import messages from '../../messages/messages';

const Nav = styled.nav`
  background: #3f51b5;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.1); 
`;

const LogoLink = styled(Link)`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  text-decoration: none; 
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
  font-size: 32px;
  display: flex;
  gap: 8px;

  &:hover {
    color: #bbdefb;
  }
`;

const NavLink = styled(Link)`
  background: none;
  border: none;
  color: white;
  margin-left: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: color 0.3s;
  text-decoration: none; 

  &:hover {
    color: #bbdefb;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <LogoLink to="/">
        <Logo>
          <FontAwesomeIcon icon={faCloud}/>
          {messages.app.title}
        </Logo>
      </LogoLink>
      <div>
        <NavLink to="/file-manager">{messages.navigation.fileManager}</NavLink>
        <NavLink to="/file-history">{messages.navigation.fileHistory}</NavLink>
      </div>
    </Nav>
  );
};

export default NavBar;
