import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';

const MenuItem5 = () => {
  return (
    <MenuContainer>
      <MenuItemContainer>
        <MenuItemImage src={require("../../../images/chanachaat.jpg")} alt="Food 1" />
        <MenuItemTitle><GlobalStyle />Chana Chaat</MenuItemTitle>
        <MenuItemDescription>Experience the irresistible blend of flavors in our Chana Chaat. Tender chickpeas tossed with zesty spices, tangy tamarind chutney, crunchy onions, and refreshing cilantro, this delightful street food will leave you craving for more with its perfect balance of savory and tangy notes.</MenuItemDescription>
        <MenuItemPrice>$6.99</MenuItemPrice>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItemImage src={require("../../../images/aloochaat.jpg")} alt="Food 2" />
        <MenuItemTitle>Aloo Chaat</MenuItemTitle>
        <MenuItemDescription>Indulge in the enticing flavors of Aloo Chaat, a beloved street food from India. Crispy potatoes tossed with tangy tamarind chutney, zesty spices, and fresh herbs, this delightful snack offers a perfect combination of textures and flavors.</MenuItemDescription>
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

export default MenuItem5;
