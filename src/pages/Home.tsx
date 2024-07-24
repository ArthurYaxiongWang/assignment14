import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero title="Welcome to My Portfolio" />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
