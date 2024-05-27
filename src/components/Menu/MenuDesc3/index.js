import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';

const MenuItem3 = () => {
  return (
    <MenuContainer>
      <MenuItemContainer>
        <MenuItemImage src={require("../../../images/jhalmuri.jpg")} alt="Food 1" />
        <MenuItemTitle><GlobalStyle />Jhal Muri</MenuItemTitle>
        <MenuItemDescription>Experience the bold and tangy flavors of Jhal Muri, a popular street food from West Bengal. This delightful snack features a mix of puffed rice, crunchy peanuts, diced vegetables, tangy tamarind chutney, and a zesty blend of spices, creating a mouthwatering explosion of taste.</MenuItemDescription>
        <MenuItemPrice>$6.99</MenuItemPrice>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItemImage src={require("../../../images/paavbhaji.jpg")} alt="Food 2" />
        <MenuItemTitle>Paav Bhaji</MenuItemTitle>
        <MenuItemDescription>Indulge in the iconic flavors of Mumbai with our Paav Bhaji. A delectable blend of mashed vegetables cooked in aromatic spices, served with soft buttered buns (paav), this popular street food is a true explosion of taste that will transport you to the bustling streets of India.</MenuItemDescription>
        <MenuItemPrice>$8.99</MenuItemPrice>
      </MenuItemContainer>
    </MenuContainer>
  );
};


const MenuContainer = styled.div`
  margin-top: -5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
  justify-items: center;
  background-color: #FCBE03;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-left: 5vh;
  }
  @media (min-width: 1024px) {
    padding-right: 50px;
    padding-left: 100px;
    padding-top: 20px;
  }
`;

const MenuItemContainer = styled.div`
  padding: 8px;
  box-sizing: border-box;
  align-items: center;
`;

const MenuItemImage = styled.img`
  width: auto;
  height: 300px;
  object-fit: cover;
  border: 7px dotted #722E6B;
  @media (max-width: 768px) {
    height: 175px;
  }
`;

const MenuItemTitle = styled.h3`
  letter-spacing: 1px;
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: 'MenuFont';
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const MenuItemDescription = styled.p`
  margin-top: 10px;
  font-size: 18px;
  margin-right: 50px;
`;

const MenuItemPrice = styled.p`
  margin-top: 10px;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-right: auto;
  display: inline-block;
  background-color: #BC4703;
  border-radius: 5px;
  padding: 5px 10px;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default MenuItem3;
