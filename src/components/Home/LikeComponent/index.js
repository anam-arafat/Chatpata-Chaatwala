import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';

const LikeComponent = () => {
  return (
    <Container>
      <Bar>
        <Text><GlobalStyle />LEAVE A LIKE!!</Text>
      </Bar>
      {/* <ImageContainer>
        <Image src={require("../../../images/image1.jpg")} alt="Image 1" />
        <Image src={require("../../../images/image2.jpg")} alt="Image 2" />
        <Image src={require("../../../images/image1.jpg")} alt="Image 3" />
        <Image src={require("../../../images/image2.jpg")} alt="Image 4" />
        <Image src={require("../../../images/image1.jpg")} alt="Image 5" />
        <Image src={require("../../../images/image2.jpg")} alt="Image 6" />
      </ImageContainer> */}
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bar = styled.div`
  padding: 20px;
  width: 100%;
  height: auto;
  background-color: #fff;
  cursor: pointer;
  color: #BC4703;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    border: 10px dotted #FCBE03;
    transition: 0.3s ease-in-out;
    color: #FCBE03;
    background-color: #722E6B;
  }
`;

const Text = styled.p`
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

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #FCBE03;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 5px;
    }
`;

const Image = styled.img`
  width: 16%;
  height: auto;
  margin: 5px;
  cursor: pointer;
  &:hover{
    transition: 0.3s ease-in-out;
    transform: scale(1.15);
    border: 7px dotted #722E6B;
  }
  @media screen and (max-width: 768px) {
    width: calc(50% - 20px);
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default LikeComponent;
