// ContactUs.js
import React from 'react';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import './ContactUs.css';
import contactImage from '../images/contate-nos.png'; // ajuste o caminho se necessário

const ContactUs = () => {
    return (
        <div>
            
            <main className="main-content">
                <div className="contact-info">
                    <img src={contactImage} alt="Contate-nos" className="contact-image" />
                    <h2 className="contact-title">Entre em contato conosco</h2>
                </div>
                <div className="form-container">
                    <form className="form">
                        <div className="input-group">
                            <div className="input-field">
                                <label>Nome:</label>
                                <input type="text" name="name" />
                            </div>
                            <div className="input-field">
                                <label>Email:</label>
                                <input type="email" name="email" />
                            </div>
                        </div>
                        <div className="input-field">
                            <label>Assunto:</label>
                            <input type="text" name="subject" />
                        </div>
                        <div className="input-field">
                            <label>Mensagem:</label>
                            <textarea name="message" />
                        </div>
                        <input type="submit" value="Enviar mensagem" />
                    </form>
                </div>
                
            </main>
            <div className="green-bar"></div>
            <Contact />
        </div>
    );
}

export default ContactUs;
