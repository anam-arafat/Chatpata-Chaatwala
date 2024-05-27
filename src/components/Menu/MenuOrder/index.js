import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';


const MenuOrder = () => {
  return (
    <Container>
      <GlobalStyle />
      <Menubar>
        <Menu>ORDER NOW</Menu>
      </Menubar>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: #FCBE03;
  margin-top: -5px;
`;

const Menubar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #FCBE03;
  color: #FFF;
  border: 10px dotted #BC4703;
  margin-right: 15%;
  margin-left: 15%;
  cursor: pointer;
  &:hover{
    transition: 0.3s ease-in-out;
    color: #BC4703;
    border: 15px dotted #722E6B;
  }
`;

const Menu = styled.div`
  letter-spacing: 3px;
  font-family: 'MenuFont';
  font-size: 500%;
  font-weight: bold;
  padding: 20px;
  @media screen and (max-width: 768px) {
        font-size: 200%;
    }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default MenuOrder;

