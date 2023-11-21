import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

import * as L from 'leaflet';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Contact.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Contact() {
  const position = [-22.598544, -48.794189]; // Coordenadas corrigidas para "Rua XV de Novembro, 127, Lençóis Paulista - SP"

  return (
    <section className="contact-wrapper">
      <div className="contact-info">
        <h2>Contato</h2>
        <p>(14) 99753-2259</p>
        <p>lifemedlp@outlook.com</p>
        <p>Rua Manoel Amancio, 163</p>
        <p>Lençóis Paulista - SP</p>
        <div className="social-links">
          <a href="https://www.facebook.com/lifemedlp" target="_blank" rel="noreferrer">
            <FaFacebook size={32} color="#007B71" />
          </a>
          <a href="https://www.instagram.com/lifemedlp/" target="_blank" rel="noreferrer">
            <FaInstagram size={32} color="#007B71" />
          </a>
          <a href=" " target="_blank" rel="noreferrer">
            <FaLinkedin size={32} color="#007B71" />
          </a>
          <a href="https://www.youtube.com/channel/UCFPSQxoHrBZcAMwIsBDzynw" target="_blank" rel="noreferrer">
            <FaYoutube size={32} color="#007B71" />
          </a>
        </div>
      </div>
      <div className="map-container">
        <div className="map-wrapper">
          <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={new L.Icon.Default()}>
              <Popup>
                Lifemed
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
