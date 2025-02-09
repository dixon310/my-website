import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero/Hero';
import About from './Components/Navbar/About/About';
import Services from './Components/Navbar/Services/Services';
import MyWork from './Components/Navbar/MyWork/MyWork';
import Contact from './Components/Navbar/Contact/Contact';
import Footer from './Components/Navbar/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
