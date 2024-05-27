import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';


const MidNav = () => {
  return (
    <Container>
      <Navbar>
        <OrderNow><GlobalStyle />ORDER NOW</OrderNow>
      </Navbar>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  z-index: 1;
`;

const Navbar = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  cursor: pointer;
  background-color: #fff;
  color: #BC4703;
  &:hover{
    border: 10px dotted #FCBE03;
    transition: 0.3s ease-in-out;
    color: #FCBE03;
    background-color: #722E6B;
  }
`;

const OrderNow = styled.div`
letter-spacing: 5px;
  font-family: 'MenuFont';
  font-size: 500%;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
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

export default MidNav;

