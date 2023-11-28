
// Menu.js
import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

// Styled component for the menu bar
const StyledMenu = styled.div`
  background-color: transparent;
  font-family:'sans-serif',Verdana;
  font-size: 25px;
  color: grey;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; /* to push items to both ends */
  align-items: center; /* Center items vertically */
`;

// Styled component for individual menu items
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white
  margin-top: 10px;
  cursor: pointer;
  margin-left: 5px; /* Add spacing between menu items */
  &:hover {
    text-decoration: none;
  }
`;

//push the items except Logo in a corner
const MenuContainer = styled.div`
  display: flex;
  gap: 2em; // Adjust the gap between the right items as needed
`;

//Logo (change name?)
const BrandName = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.4em;
  margin-right: 70px;
  &:hover {
    text-decoration: none;
  }
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Header = () => {
    return (
        <StyledMenu>
            <BrandName to="/">LearnByDoing</BrandName>
            <MenuContainer>
              <StyledLink to="/About">About Us</StyledLink>
              <StyledLink to="/Contact">Contact</StyledLink>
              <LoginButton to="/">Login</LoginButton>
              
            </MenuContainer>
        </StyledMenu>
    );
};

export default Header;
