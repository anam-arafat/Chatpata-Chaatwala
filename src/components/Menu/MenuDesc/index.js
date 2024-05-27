import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';

const MenuItem1 = () => {
  return (
    <MenuContainer>
      <MenuItemContainer>
        <MenuItemImage src={require("../../../images/panipuri.jpg")} alt="Food 1" />
        <MenuItemTitle><GlobalStyle />Pani Puri</MenuItemTitle>
        <MenuItemDescription>Delight in the irresistible Pani Puri, a beloved Indian street food. Crispy puris filled with a delectable blend of spiced mashed potatoes, tangy tamarind chutney, and a refreshing mint water, creating an explosion of flavors in every bite.</MenuItemDescription>
        <MenuItemPrice>$7.99</MenuItemPrice>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItemImage src={require("../../../images/dahipuri.jpg")} alt="Food 2" />
        <MenuItemTitle>Dahi Puri</MenuItemTitle>
        <MenuItemDescription>Savor the creamy indulgence of Dahi Puri, a popular Indian snack. Crispy puris filled with a delightful combination of yogurt, tangy tamarind chutney, and a sprinkle of savory spices, offering a perfect balance of textures and flavors.</MenuItemDescription>
        <MenuItemPrice>$7.99</MenuItemPrice>
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
margin-top: 20px;
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

export default MenuItem1;
