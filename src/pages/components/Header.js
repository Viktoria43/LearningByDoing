
// Menu.js
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import styled from 'styled-components';

// Styled component for the menu bar
const StyledMenu = styled.div`
  background-color: rgba(255, 0, 100, 0.3);
  box-shadow: 0 0 5px 3px #440000;
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
  color: white;
  margin-top: 3%;
  font-size: 0.6em;
  cursor: pointer;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
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
  color: #aaddff;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
  margin-right: 70px;
  &:hover {
    text-decoration: none;
  }
`;

const LoginLogoutButton = styled(Link)`
  text-decoration: none;
  background-color: black;
  color: white;
  font-size: 0.6em;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
  padding: 8px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #559;
  }
`;

const Header = () => {
    const [isLoggedIn] = useState(window.localStorage.getItem('accessToken') ? true:false);
    console.log(isLoggedIn)
    return (
        <StyledMenu>
            <BrandName to="/">LearnByDoing</BrandName>
            <MenuContainer>
              <StyledLink to="/About">About Us</StyledLink>
              <StyledLink to="/Contact">Contact</StyledLink>


                {isLoggedIn ? (
                    <LoginLogoutButton onClick={()=>{window.localStorage.clear()}} to="/Login">Logout</LoginLogoutButton>
                ) : (
                    <LoginLogoutButton to="/Login">Login</LoginLogoutButton>
                )}


            </MenuContainer>
        </StyledMenu>
    );
};

export default Header;
