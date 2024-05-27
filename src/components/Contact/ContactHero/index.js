import React from 'react';
import styled from 'styled-components';

import imageSrc from '../../../images/Item1.jpg';

const ContactHero = () => {
  return (
    <Container>
      <Image src={imageSrc} alt="Responsive Image" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: auto;
  margin-bottom: -5px;
`;

const Image = styled.img`
  margin-top: 100px;
  width: 100%;
  height: auto;
  @media screen and (max-width: 768px) {
    margin-top: 100px; 
  }
`;

export default ContactHero;
