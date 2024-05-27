import React, {useState} from 'react';
import { GlobalStyle } from '../globalStyles';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactFollow from '../components/Contact/ContactFollow';


const Contact = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);};

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <GlobalStyle />
      <ContactHero />
      <ContactForm />
      <ContactFollow />
      <Footer />
    </>
  );
};

export default Contact;