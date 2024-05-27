import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';

const MenuHero = () => {
  return (
    <Container>
      <Menubar>
        <Menu><GlobalStyle />OUR MENU</Menu>
      </Menubar>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Menubar = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  background-color: #FCBE03;
  color: #000;
`;

const Menu = styled.div`
  letter-spacing: 5px;
  font-family: 'MenuFont';
  font-size: 700%;
  font-weight: bold;
  padding: 20px;
  @media screen and (max-width: 768px) {
        font-size: 300%;
    }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default MenuHero;

