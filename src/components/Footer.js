// Footer.js
import React from 'react';
import './Footer.css';
import qualityFooter from '../images/quality-footer.png'; // Ajuste o caminho conforme necessário

function Footer() {
  return (
    <footer>
      <div className="footer-bar-1"></div>
      <div className="footer-bar-2">
        <img src={qualityFooter} alt="QualitySeg" className="footer-image"/>
      </div>
      <div className="footer-bar-3">
        <p>Todos os direitos reservados | Desenvolvido pela equipe de TI da QualitySEG LP | 2023 ©</p>
      </div>
    </footer>
  );
}

export default Footer;
