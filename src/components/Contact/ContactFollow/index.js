import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuFont from '../../../font.otf';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactFollow = () => {
    return (
        <Container>
            <TopRow>
                <Menu><GlobalStyle />FOLLOW US ON</Menu>
            </TopRow>
            <BottomRow>
                <SocialIcon href='/' target='_blank' aria-label='Facebook'>
                    <FaFacebook />
                </SocialIcon>
                <SocialIcon href='/' target='_blank' aria-label='Instagram'>
                    <FaInstagram />
                </SocialIcon>
                <SocialIcon href='/' target='_blank' aria-label='Twitter'>
                    <FaTwitter />
                </SocialIcon>
            </BottomRow>
        </Container>
    );
};


const Container = styled.div`
padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #722E6B;
  cursor: pointer;
  border: 15px dotted #fff;
`;

const TopRow = styled.div`
  margin: auto;
`;

const Menu = styled.div`
  letter-spacing: 3px;
  font-family: 'MenuFont';
  padding: 20px;
  font-size: 500%;
  color: #FCBE03;

  @media screen and (max-width: 768px) {
    font-size: 200%;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const SocialIcon = styled.li`
  list-style-type: none;
  margin-right: 15%;
  margin-left: 15%;
  font-size: 300%;
  color: black;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in-out;
    color: #FCBE03;
  }
  @media screen and (max-width: 768px) {
    font-size: 150%;
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MenuFont';
    src: url(${menuFont}) format('opentype');
  }
`;

export default ContactFollow;
