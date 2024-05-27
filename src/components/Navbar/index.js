import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../font.otf';
import { FaBars } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  return (
    <Nav>
      <NavbarWrapper>
        <NavbarLeft>
          <NavbarBrand href='/'><GlobalStyle />Chatpata Chaatwala</NavbarBrand>
        </NavbarLeft>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavbarRight>
          <SocialIcons>
            <SocialIcon href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIcon>
          </SocialIcons>
          <NavbarItems>
            <NavbarItem>
              <a href="/story">Our Story</a>
            </NavbarItem>
            <NavbarItem>
              <a href="/menu">Menu</a>
            </NavbarItem>
            <NavbarItem>
              <a2 href="#">Chaat+</a2>
            </NavbarItem>
            <NavbarItem>
              <a2 href="#">Order Now</a2>
            </NavbarItem>
            <NavbarItem>
              <a href="/contact">Contact Us</a>
            </NavbarItem>
          </NavbarItems>
        </NavbarRight>
      </NavbarWrapper>
      </Nav>
  );
};

const Nav = styled.nav`
    height: 100px;
    margin-top: -100px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
`

const NavbarWrapper = styled.nav`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #BC4703;
  padding: 20px;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarBrand = styled.a`
letter-spacing: 1px;
  font-family: 'MenuFont';
  cursor: pointer;
  font-size: 2rem;
  color: white;
  text-decoration: none;
  padding-left: 20px;
  &:hover {
    transition: 0.3s ease-in-out;
    color: #FCBE03;
  }
  @media screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

const NavbarRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
  @media screen and (max-width: 768px) {
        display: none;
    }
`;

const SocialIcons = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

const SocialIcon = styled.li`
  padding-bottom: 10px;
  padding-left: 25px;
  font-size: 1.7rem;
  color: white;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in-out;
    color: #FCBE03;
  }
`;

const NavbarItems = styled.ul`
  list-style-type: none;
  display: flex;
  margin-right: 15px;
  font-size: 1.3rem;
`;

const NavbarItem = styled.a`
  padding-left: 25px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;
    &:hover {
      transition: 0.3s ease-in-out;
      color: #FCBE03;
    }
  }
  
  a2 {
    text-decoration: none;
    background-color: #722E6B;
    color: white;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 5px;
    &:hover {
      transition: 0.3s ease-in-out;
      color: #FCBE03;
    }
  }
`
const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-150%,90%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
        margin-top: 3px;
    }
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;
export default Navbar;