import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TechStack from './components/TechStack';
import SocialMedia from './components/SocialMedia';
import Hero from './components/Hero';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return (
          <>
            <Hero title="Welcome to My Portfolio" photoUrl="/src/assets/images/me.jpeg" />
            <Home />
            <SocialMedia />
          </>
        );
      case 'About':
        return <About />;
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return (
          <>
            <TechStack />
            <Contact />
            <SocialMedia />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
