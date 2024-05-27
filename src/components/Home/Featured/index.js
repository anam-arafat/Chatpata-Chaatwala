import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';


const Featured = () => {
    return (
      <Wrapper>
        <Picture src={require('../../../images/panipuri.jpg')} alt="Example" />
        <Description>
          <DescriptionTitle><GlobalStyle />Pani Puri</DescriptionTitle>
          <DescriptionText>
          Introducing our Pani Puri Sensation, a tantalizing explosion of flavors that will take your taste buds on an unforgettable journey. Indulge in our artisanal puris, perfectly crispy and made with a secret blend of premium flours, serving as the ideal vessel for our innovative fillings. Experience the thrill of unexpected combinations like the tangy Thai Twist with lemongrass, coconut, and peanuts, or the smoky BBQ Delight with tender pulled barbecue chicken or jackfruit. Dive into the exotic Mango Fusion, featuring ripe mangoes, chaat masala, and mint. Quench your thirst with our flavorful waters, from tangy tamarind to refreshing mint. Join us and let the Pani Puri Sensation ignite your senses, where tradition meets innovation in a single unforgettable bite.
          </DescriptionText>
          <a href="/menu"><Button >View Menu</Button></a>
        </Description>
      </Wrapper>
    );
  };


const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FCBE03;
  border: 15px dotted #BC4703;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
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
  background-color: #BC4703;
  color: #fff;
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
    color: white;
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default Featured;
