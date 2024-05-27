import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <CarouselImageContainer>
        <CarouselImage src={require("../../../images/Shop1.jpg")} alt="Carousel Image" />
      </CarouselImageContainer>
    </HeroContainer>
  );
};


const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const CarouselImageContainer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;


const CarouselImage = styled.img`
  margin-top: 100px;
  width: 100%;
  height: auto;
  @media screen and (max-width: 768px) {
    margin-top: 100px; 
  }
`;

export default HeroSection;

