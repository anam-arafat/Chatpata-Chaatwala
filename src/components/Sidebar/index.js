import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <a href="/" onClick={toggle}>Home</a>
                    <a href="/story">Our Story</a>
                    <a href="/menu" onClick={toggle}>Menu</a>
                    <a href="/" onClick={toggle}>Chaat+</a>
                    <a href="/" onClick={toggle}>Order Now</a>
                    <a href="/contact" onClick={toggle}>Contact Us</a>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #BC4703;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: white;
    &:hover{
        transition: 0.3s ease-in-out;
        color: #722E6B;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    @media screen and (min-width: 768px){
        grid-template-rows: repeat(6,60px);
    }
`;

export const SidebarWrapper = styled.div`
    color: white;   
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,70px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }

    a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover {
    transition: 0.3s ease-in-out;
    color: #FCBE03;
    }
  } 
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover {
    transition: 0.3s ease-in-out;
    color: #FCBE03;
    }
    
`;

export default Sidebar;
