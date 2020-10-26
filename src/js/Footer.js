import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import credits from '../images/creditos.svg';
import logo from '../images/logo-small.svg';
import logo_uniandes from '../images/logo-uniandes.png';
import sparks from '../images/sparks.svg';
import fire from '../images/fuego.svg';
import cc from '../images/cc.svg';
import '../css/Footer.css';

function Footer() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <footer>
      <div className="credits">
        {location.pathname === '/creditos' ?
        <div className="fire">
          <img src={fire} className="no-hov" alt="Ilustración de llamas de fuego" />
        </div>
        :
        <NavLink to="/creditos" className="active link">
          <img src={credits} className="hov" alt="Ver créditos" />
        </NavLink>
      }
      </div>
      <div className="footer">
        <img src={logo} className="logo item" alt="Logo de Periodismo feminista" />
        <div className="item">
          <img src={logo_uniandes} className="logo item" alt="Logo del Centro de Investigación y Creación de la Facultad de Artes y Humanidades de la Universidad de los Andes" />
        </div>
        <div className="item thanks">
          <p>
            Este proyecto fue realizado por Johan Sebastián Romero Rodríguez
            como parte de su proyecto de grado de la maestría en Periodismo
            de la Universidad de los Andes. Diseño y desarrollo web por
            Mariana Villamizar Rodríguez.
          </p>
          <img src={sparks} alt="Ilustración de destellos" />
        </div>
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
