import React, { Component } from 'react';
import Home from './pages/index';
import Story from './pages/story';
import Menu from './pages/menu';
import Contact from './pages/contact';


function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/story":
      Component = Story
      break
    case "/menu":
      Component = Menu
      break
    case "/contact":
      Component = Contact
      break
  }
  return (
    <>
      <Component />
    </>
  );
}

export default App;


// import React from 'react';
// import Home from './pages/index';
// import { BrowserRouter as Router} from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       <Home />
//     </Router>
//   );
// }

// export default App;