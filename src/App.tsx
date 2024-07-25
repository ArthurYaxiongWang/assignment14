import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TechStack from './components/TechStack/TechStack';
import SocialMedia from './components/SocialMedia/SocialMedia';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return (
          <>
            <TechStack /> {/* Add TechStack component above Contact */}
            <Contact />
            <SocialMedia /> {/* Add SocialMedia component */}
          </>
        );
      default:
        return (
          <>
            <Home />
            <TechStack /> {/* Add TechStack component here */}
            <SocialMedia /> {/* Add SocialMedia component */}
          </>
        );
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
