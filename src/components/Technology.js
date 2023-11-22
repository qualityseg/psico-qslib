import React from 'react';
import './Technology.css';
import TechImage from '../images/tecnologia.png'; // Importando a nova imagem
import PsicoAppImage from '../images/Psico-app.png'; // Importando a imagem 
import PsicoBanner1 from '../images/tela1.png'; // Importando a imagem 

function Technology() {
    return (
        <div className="technology">
            <img src={TechImage} alt="Tecnologia" className="technology__newImage"/> 
            {/* Nova imagem adicionada aqui */}
            <h1 className="technology__title">Tecnologia</h1>
            <div className="technology__content">
                <img src={PsicoAppImage} alt="Psico App" className="technology__image"/>


                <div className="technology__description">
                    <h2>Escaneamento digital da sua mente com a inteligencia artificial empática LIAlab Psico</h2>
                    <p>
                        Acesse nosso Portal pela web, por enquanto fique ansioso para o lançamento do nosso aplicativo Android e iOS. Responda diversas perguntas sobre você, 
                        sua saúde física e mental. Enquanto isso, a LIAlab Psico analisará seu padrão dinâmico 
                        de comportamento com o sistema, trazendo informações preciosas para melhorar sua saúde e sua vida.
                    </p>
                    <h3>Relatórios conclusivos:</h3>
                    <ul>
                        <li>Estados mentais</li>
                        <li>Comportamento</li>
                        <li>Traços de personalidade</li>
                        <li>Interação mente e corpo brasil </li>

                    <p> </p>

    
                    </ul>
                </div>
            </div>
            <img src={PsicoBanner1} alt="Psico App" /> 
        </div>
    );
}

export default Technology;
