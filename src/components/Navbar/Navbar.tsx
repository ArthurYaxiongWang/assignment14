import React from 'react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setCurrentPage('Home')}>Home</button>
      <button onClick={() => setCurrentPage('About')}>About</button>
      <button onClick={() => setCurrentPage('Experience')}>Experience</button>
      <button onClick={() => setCurrentPage('Projects')}>Projects</button>
      <button onClick={() => setCurrentPage('Contact')}>Contact</button>
    </nav>
  );
};

export default Navbar;
