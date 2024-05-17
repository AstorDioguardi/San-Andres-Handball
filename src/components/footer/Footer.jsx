import React from "react";

import logoClub from '../../assets/icons/logo-club.png';
import brandConsultora from '../../assets/icons/brand-consultora.png';
import brandRouco from '../../assets/icons/brand-rouco.png';
import brandDt from '../../assets/icons/brand-dt.png';
import brandAmerican from '../../assets/icons/brand-american.png';
import brandAutosol from '../../assets/icons/brand-autosol.png';


import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

export const Footer = () => {

  return(
    <footer>
      <div className="footer__container">
        <img src={logoClub} alt="Logo club" />

        <div className="middle">
          <div className="brand">
            <img src={brandConsultora} alt="Logo Consultora de Ventas y Marketing" className="brand__logo"/>
            <img src={brandRouco} alt="Logo Estudio Rouco" className="brand__logo"/>
            <img src={brandDt} alt="Logo DT Soluciones" className="brand__logo"/>
            <img src={brandAmerican} alt="Logo American Force Fitness" className="brand__logo"/>
            <img src={brandAutosol} alt="Logo Autosol" className="brand__logo"/>
          </div>
          <h3 className="footer__adress">Int. Casares 2845 - San Andres - Bs. As.</h3>
        </div>

        <div className="footer__social">
          <p>Visita nuestras redes sociales</p>
          <div className="footer__social-logos">
            <a href="https://www.instagram.com/sanandreshandball/" target="_blank" rel="noreferrer">
              <FaInstagram className="footer__social-logo instagram"/>
            </a>
            <a href="https://www.youtube.com/@SanAndresHandball" target="_blank" rel="noreferrer">
              <SlSocialYoutube className="footer__social-logo youtube"/>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}