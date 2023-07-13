// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <button onClick={toggleMenu} className="menu-icon">
        {isOpen ? 'X' : '☰'}
      </button>

      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/tecnologia" onClick={toggleMenu}>Tecnologia</Link></li>
          <li><Link to="/contact-us" onClick={toggleMenu}>Fale Conosco</Link></li>
          <li><Link to="/a-herah" onClick={toggleMenu}>A QualitySeg</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
