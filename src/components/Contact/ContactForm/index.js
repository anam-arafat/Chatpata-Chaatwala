import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';

const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <ContactFormContainer>
        <LeftColumn>
          <Title><GlobalStyle />Contact Us</Title>
          <Description>
          Please use the form if you have any thoughts, ideas, suggestions, or feedback. We would love to hear from you!
          </Description>
        </LeftColumn>
        <RightColumn>
          <InputBox type="text" placeholder="Name*" />
          <InputBox type="email" placeholder="Email Address*" />
          <InputBox type="tel" placeholder="Phone Number*" />
          <InputBox as="textarea" rows="4" placeholder="Comments*" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </RightColumn>
      </ContactFormContainer>
    </ContactFormWrapper>
  );
};

const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactFormContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;
  background-color: #FCBE03;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  letter-spacing: 1px;
  font-family: 'MenuFont';
  font-size: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #BC4703;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const InputBox = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding: 8px;
    margin-top: 4px;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 16px;
  background-color: #BC4703;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover{
    color: #FCBE03;
    background-color: #722E6B;
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default ContactForm;
