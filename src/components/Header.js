// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import qualityFooter from '../images/quality-footer.png'; // Ajuste o caminho conforme necessário
import minilogo from '../images/minilogo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const Menu = () => (
    <ul className={isMobile ? "mobile" : "desktop"}>
       
      <p><img src={minilogo} alt="Psico App" /></p>
      <a></a>
      <p><li><Link to="/">Home</Link></li></p>
      <p><li><Link to="/tecnologia">Tecnologia</Link></li></p>
      <p><li><Link to="/contato">Fale Conosco</Link></li></p>
      <p> <li><Link to="/a-qualityseg">A Lifemed</Link></li>  </p>
      <p> <li><Link to="https://psico-painel.vercel.app/Login">Login</Link></li> </p>

    </ul>
  );

  return (
    <header className="header">
      {isMobile ? (
        <nav>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
            <span>MENU</span>
          </button>
          {isOpen && <Menu />}
        </nav>
      ) : (
        <nav>
          <Menu />
        </nav>
      )}
    </header>
  );
};

export default Header;
