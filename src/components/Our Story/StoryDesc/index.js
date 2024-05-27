import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';


const StoryDesc = () => {
    return (
      <Wrapper>
        <Description>
          <DescriptionTitle><GlobalStyle />About Us</DescriptionTitle>
          <DescriptionText>
          Welcome to our small family-owned restaurant located in the heart of downtown Toronto! We originally started with a waffle and comfort food hut that opened its doors in 2020 called Squares&Affaires, right in the middle of the Covid lockdowns. Despite the challenges we faced, we were determined to offer our customers unique street food that we had discovered from our travels. 
          </DescriptionText>
          <DescriptionText>
          While we received positive feedback on our food, we were barely making any profit. One day, my mother decided to add her Pav bhaji to the menu, and it was an instant hit! Word of mouth quickly spread, and people from all over the GTA were flocking to our little hut just for our Pav bhaji. It became a staple of our business, and we realized that the majority of our customers were students and professionals from South Asia. 
          </DescriptionText>
          <DescriptionText>
          Even though we only had one Indian dish on our menu, we were getting requests from customers immigrating from various regions of the subcontinent to make their favourite street food. This is when we realized how diverse Desi people really are when it comes to street food and found our mission. 
          </DescriptionText>
          <DescriptionText>
          Our goal is to master famous street food from the great cities of South Asia and offer an experience from back home to the amazing people who are far away from home with our Desi Street Food. Our menu features a variety of dishes from different parts of South Asia. Come visit us and experience the taste of Desi Street Food right here in the heart of downtown Toronto!
          </DescriptionText>
        </Description>
        <Picture src={require('../../../images/logo.jpg')} alt="Example" />
      </Wrapper>
    );
  };


const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FCBE03;
  border: 15px dotted #722E6B;

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
  font-size: 14px;
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

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default StoryDesc;
