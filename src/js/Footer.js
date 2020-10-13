import React from 'react';
import logo from '../images/logo-white.svg';
import logo_uniandes from '../images/logo-uniandes.png';
import sparks from '../images/sparks.svg';
import cc from '../images/cc.svg';
import '../css/Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <img src={logo} className="logo item" alt="Logo de Archivos digitales" />
      <div className="item">
        <img src={logo_uniandes} className="logo item" alt="Logo del Centro de Investigación y Creación de la Facultad de Artes y Humanidades de la Universidad de los Andes" />
      </div>
      <div className="item credits">
        <p>
          Este proyecto fue realizado por Johan Sebastián Romero Rodríguez
          como parte de su proyecto de grado de la maestría en Periodismo
          de la Universidad de los Andes. Diseño y desarrollo web por
          Mariana Villamizar Rodríguez.
        </p>
        <img src={sparks} alt="Ilustración de destellos" />
      </div>
      <div className="cc">
        <img src={cc} className="icon" alt="Logo de Creatve Commons CC-BY-SA" />
        <p>
          Todo el material en esta página, cuando no se indique lo contrario, es CC-BY-SA.
          Si reúsas o adaptas recursos de esta página por favor vincúlalos y referéncialos.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
