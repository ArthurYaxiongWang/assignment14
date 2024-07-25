import React from 'react';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import TechStack from '../components/TechStack/TechStack';

const Home: React.FC = () => {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
};

export default Home;
