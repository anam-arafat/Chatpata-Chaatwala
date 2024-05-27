import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;