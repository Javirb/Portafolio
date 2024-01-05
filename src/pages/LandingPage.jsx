import React from 'react';
import Header from '../components/LandingPage/Header/Header';
import About from '../components/LandingPage/About/About';
import Main from '../components/LandingPage/Main/Main';
import Footer from '../components/General/Footer/Footer';

import '../App.css';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
