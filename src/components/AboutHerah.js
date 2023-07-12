// AboutHerah.js
import React from 'react';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';

const AboutHerah = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>About QualitySeg Consultoria</h1>
                <img src="https://placekitten.com/200/300" alt="Placeholder kitten" />
                <p>
                    Insira aqui a informação sobre a QualitySeg Consultoria. 
                    Pode descrever os serviços prestados, a missão e visão da empresa, 
                    os principais projetos, etc.
                </p>
            </main>
            <Contact />
            <Footer />
        </div>
    );
}

export default AboutHerah;
