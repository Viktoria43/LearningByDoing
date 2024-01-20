
// Menu.js
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import styled from 'styled-components';
import websiteLogo from './images/SP_Logo-removebg.png';
import websiteLogoHover from './images/SP-Logo-removebgwhite.png'

// Styled component for the menu bar
const StyledMenu = styled.div`
  background-color: rgba(8, 24, 168, 0.5); 
  box-shadow: 0 0 3px 3px ;
  font-family: 'sans-serif', Verdana;
  font-size: 25px;
  color: grey;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
`;
// Styled component for individual menu items
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 3%;
  font-size: 0.6em;
  cursor: pointer;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
  margin-left: 5px; /* Add spacing between menu items */
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

//push the items except Logo in a corner
const MenuContainer = styled.div`
  display: flex;
  gap: 2em; // Adjust the gap between the right items as needed
`;

//Logo (change name?)

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  width: 300px;
  height: 50px;
  &:hover {
    content: url(${websiteLogoHover});
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Logo to="/">
              <LogoImage src={websiteLogo} alt="Website Logo" />
            </Logo>
            
          </div>
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
