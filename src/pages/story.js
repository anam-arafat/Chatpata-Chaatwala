import React, {useState} from 'react';
import { GlobalStyle } from '../globalStyles';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StoryHero from '../components/Our Story/StoryHero';
import StoryDesc from '../components/Our Story/StoryDesc';
import StoryDesc2 from '../components/Our Story/StoryDesc2';
import StoryDesc3 from '../components/Our Story/StoryDesc3';
import Footer from '../components/Footer';


const Story = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);};

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <GlobalStyle />
      <StoryHero />
      <StoryDesc />
      {/* <StoryDesc2 /> */}
      {/* <StoryDesc3 /> */}
      <Footer />
    </>
  );
};

export default Story;