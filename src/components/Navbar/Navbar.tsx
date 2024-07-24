import React from 'react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setCurrentPage('Home')}>Home</button></li>
        <li><button onClick={() => setCurrentPage('About')}>About</button></li>
        <li><button onClick={() => setCurrentPage('Experience')}>Experience</button></li>
        <li><button onClick={() => setCurrentPage('Projects')}>Projects</button></li>
        <li><button onClick={() => setCurrentPage('Contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
