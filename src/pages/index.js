import React, {useState} from 'react';
import { GlobalStyle } from '../globalStyles';
import Hero from '../components/Home/Hero';
import Footer from '../components/Footer';
import MidNav from '../components/Home/MidNav';
import Featured from '../components/Home/Featured';
import FeaturedRev from '../components/Home/FeaturedRev';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import LikeComponent from '../components/Home/LikeComponent';

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);};

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <GlobalStyle />
      <Hero />
      <MidNav />
      <Featured />
      <FeaturedRev />
      <LikeComponent />
      {/* <Products heading='Choose your favorite' data={productData} /> */}
      <Footer />
    </>
  );
};

export default Home;