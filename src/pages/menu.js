import React, {useState} from 'react';
import { GlobalStyle } from '../globalStyles';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuHero from '../components/Menu/MenuHero';
import MenuOrder from '../components/Menu/MenuOrder';
import MenuContact from '../components/Menu/MenuContact';
import MenuItem1 from '../components/Menu/MenuDesc';
import MenuItem2 from '../components/Menu/MenuDesc2';
import MenuItem3 from '../components/Menu/MenuDesc3';
import MenuItem4 from '../components/Menu/MenuDesc4';
import MenuItem5 from '../components/Menu/MenuDesc5';
import MenuItem6 from '../components/Menu/MenuDesc6';


const Menu = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);};

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <GlobalStyle />
      <MenuHero />
      <MenuOrder />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem5 />
      <MenuItem6 />
      <MenuContact />
      <Footer />
    </>
  );
};

export default Menu;