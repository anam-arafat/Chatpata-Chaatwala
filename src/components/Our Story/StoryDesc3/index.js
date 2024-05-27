import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';


const StoryDesc3 = () => {
    return (
      <Wrapper>
        <Description>
          <DescriptionTitle><GlobalStyle />Content 3</DescriptionTitle>
          <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis, sem eget posuere hendrerit, libero nulla interdum massa, eu fermentum leo turpis vel diam. Quisque sollicitudin ex eros, nec gravida nisi egestas nec. Cras in condimentum magna. Integer aliquet dolor ac risus sollicitudin, eget sollicitudin nulla congue. Maecenas iaculis finibus pharetra. Mauris vel ipsum lacinia, fringilla enim id, gravida elit. Etiam ornare elementum ipsum vel tempus.
          </DescriptionText>
        </Description>
        <Picture src={require('../../../images/Item2.jpg')} alt="Example" />
      </Wrapper>
    );
  };


const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
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

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default StoryDesc3;
