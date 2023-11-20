// Menu.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the menu bar
const StyledMenu = styled.div`
  background-color: #BFBFBF;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between; /* to push items to both ends */
  align-items: center; /* Center items vertically */
`;

// Styled component for individual menu items
const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 5px; /* Add spacing between menu items */
  &:hover {
    text-decoration: underline;
  }
`;

const BrandName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  margin-right: 70px;
`;

const LoginButton = styled.div`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;
const Menu = () => {
    return (
        <StyledMenu>
            <BrandName>LearningByDoing</BrandName>
            <div>
                <MenuItem>About Us</MenuItem>
            </div>
            <div>
                <MenuItem>Contact</MenuItem>
            </div>
            <LoginButton>Login</LoginButton>
        </StyledMenu>
    );
};

export default Menu;
