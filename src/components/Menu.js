// Todo: font family, size changes, check on non-monitor and phone devices

// Menu.js
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
const MenuItem = styled.div`
  // background-color: grey;
  cursor: pointer;
  margin-left: 5px; /* Add spacing between menu items */
  &:hover {
    text-decoration: underline;
  }
`;

//push the items except Logo in a corner
const MenuContainer = styled.div`
  display: flex;
  gap: 245px; // Adjust the gap between the right items as needed
`;

//Logo (change name?)
const BrandName = styled.div`
  color: black;
  font-weight: bold;
  font-size: 1.4em;
  margin-right: 70px;
`;

const LoginButton = styled.div`
  background-color: black;
  color: grey;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Menu = () => {
    return (
        <StyledMenu>
            <BrandName>LearnByDoing</BrandName>
            <MenuContainer>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Contact</MenuItem>
        <LoginButton>LOGIN</LoginButton>
      </MenuContainer>
        </StyledMenu>
    );
};

export default Menu;
