import React from 'react';
import About from './About';
import Featured from './Featured';
import Footer from './Footer';
import Gallery from './Gallery';
import Hero from './Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <About />
      <Gallery />
    </div>
  );
};

export default Home;