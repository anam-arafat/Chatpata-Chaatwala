import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';


const Footer = ({ toggle }) => {
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <div>
        <Title to="/"><a href='/'>Chatpata Chaatwala</a></Title>
        <RightsText>&copy; 2023 Chatpata Chaatwala. All Rights Reserved.</RightsText>
      </div>
      <div>
        <SocialIconsContainer>
        <SocialIcon href='/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIcon>
        <SocialIcon href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialIcon>
        <SocialIcon href='/' target='_blank' aria-label='Twitter'><FaTwitter /></SocialIcon>
        </SocialIconsContainer>
        <NavbarContainer>
          <NavbarLink href="/story">Our Story</NavbarLink>
          <NavbarLink href="/menu">Menu</NavbarLink>
          <NavbarLink href="#">Chaat+</NavbarLink>
          <NavbarLink href="#">Order Now</NavbarLink>
          <NavbarLink href="/contact">Contact Us</NavbarLink>
        </NavbarContainer>
      </div>
    </FooterContainer>
  );
};


const FooterContainer = styled.footer`
  background-color: #000;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
  `;

const Title = styled.h1`
  margin: 5px;
  margin-left: 10px;
  a{
    text-decoration: none;
    font-size: 26px;
    color: white;
    cursor: pointer;
  &:hover{
    transition: 0.3s ease-in-out;
    color: #FCBE03;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  }
`;

const RightsText = styled.p`
  font-size: 14px;
  margin: 5px;
  color: grey;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    align-items: end;
    margin: auto;
    padding-bottom: 5px;
  }
`;

const SocialIcon = styled.a`
  margin-right: 15px;
  font-size: 25px;
  color: white;
  cursor: pointer;
  &:hover{
    transition: 0.3s ease-in-out;
    color: #FCBE03;
  }
  @media screen and (max-width: 768px) {
    padding-left: 5px;
    padding-top: 10px;
    padding-right: auto;
    padding-bottom: 10px;
    font-size: 1rem;
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: auto;
    padding-right: auto;
  }
`;

const NavbarLink = styled.a`
  margin-right: 16px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
  &:hover{
    transition: 0.3s ease-in-out;
    color: #FCBE03;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    padding-bottom: 10px;
  }
`;

export default Footer;







