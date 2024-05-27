import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';


const FeaturedRev = () => {
    return (
      <Wrapper>
        <Description>
          <DescriptionTitle><GlobalStyle />Paav Bhaji</DescriptionTitle>
          <DescriptionText>
          Introducing our Paav Bhaji Extravaganza, a flavor-packed journey that will transport you to the vibrant streets of Mumbai. Indulge in the buttery goodness of our secret spice-infused bhaji, a delectable blend of mashed vegetables slow-cooked to perfection, topped with a generous dollop of creamy butter. Savor the crispy toasted paav, slathered with butter and paired perfectly with the flavorful bhaji. Customize your experience with tangy toppings like zesty lemon, finely chopped onions, and fresh coriander. Ignite your taste buds with fiery chutneys, from tangy tamarind to spicy green chili and garlic-infused red chili. Join us and immerse yourself in the Paav Bhaji Extravaganza, where the rich flavors and aromatic spices will leave you craving for more.
          </DescriptionText>
          <a href="/menu"><Button>View Menu</Button></a>
        </Description>
        <Picture src={require('../../../images/paavbhaji.jpg')} alt="Example" />
      </Wrapper>
    );
  };


const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #BC4703;
  border: 15px dotted #FCBE03;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  flex: 1;
  padding: 16px;
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const DescriptionTitle = styled.h1`
  letter-spacing: 1px;
  font-family: 'MenuFont';
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const DescriptionText = styled.p`
  line-height: 120%;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Picture = styled.img`
  padding: 20px;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 40%;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #FCBE03;
  color: #000;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:hover{
    transition: 0.3s ease-in-out;
    background-color: #722E6B;
    color: #FCBE03;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default FeaturedRev;
