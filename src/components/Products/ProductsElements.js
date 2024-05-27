import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #722E6B;
  color: #FFFFFF;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin-left: 10px;
  padding-left: 40px;
  line-height: 1.5;
  width: 300px; 
`;

export const ProductImg = styled.img`
  height: 200px;
  width: 200px;
  min-width: 200px;
  min-height: 200px;
  box-shadow: 8px 8px #FCBE03;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  padding-right: 40px;
  font-weight: 300;
  font-size: 1.3rem;
  text-align: center;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  padding-right: 35px;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  padding-right: 40px;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProductButton = styled.button`
  margin-right: 40px;
  font-size: 1rem;
  border-radius: 7px;
  padding: 1rem 2.5rem;
  border: none;
  background: #BC4703;
  color: #FFFFFF;
  transition: 0.2 ease-out;
  &:hover {
    background: #FCBE03;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000000;
  }
`;