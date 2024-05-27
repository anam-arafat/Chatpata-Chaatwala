import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';

const MenuContact = () => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar>
        <ContactUs><a href='/contact'>CONTACT US</a></ContactUs>
      </Navbar>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: -5px;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #FCBE03;
  color: #BC4703;
  cursor: pointer;
  padding: 10px;
  &:hover{
    border: 10px dotted #722E6B;
    transition: 0.3s ease-in-out;
    background-color: #FCBE03;
  }
`;

const ContactUs = styled.div`
letter-spacing: 3px;
  padding: 10px;
  a {
  color: #BC4703;
  font-size: 500%;
  font-weight: bold;
  font-family: 'MenuFont';
  padding: 20px;
  @media screen and (max-width: 768px) {
        font-size: 200%;
    }
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default MenuContact;

