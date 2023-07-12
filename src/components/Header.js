// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
   
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tecnologia">Tecnologia</Link></li>
          <li><Link to="/contact-us">Fale Conosco</Link></li>
          <li><Link to="/a-herah">A QualitySeg</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
