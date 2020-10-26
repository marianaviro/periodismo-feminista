import React from 'react';
import credits from '../images/ilustracion_creditos.svg';
import proyecto from '../images/proyecto.svg';
import separador from '../images/punto_final.svg';
import logo_uniandes from '../images/logo-uniandes.png';
import agrade from '../images/agradecimientos.svg';
import '../css/Credits.css';

function Credits() {
  return (
    <div className="acknowledge">
      <div className="credits">
        <h1>Créditos</h1>
        <img src={credits} className="" alt="Ver créditos" />
      </div>
      <div className="proyecto">
        <img src={proyecto} className="" alt="Proyecto de grado de" />
        <h1>Johan Sebastián Romero Rodríguez</h1>
      </div>
      <div className="separador">
        <img src={separador} className="" alt="Ilustración de rombo" />
      </div>
      <div className="agradecimientos">
        <img src={agrade} className="title" alt="Proyecto de grado de" />
        <div className="columns">
          <div className="column">
            <h3>Sandra Beatriz Gutiérrez Bermúdez</h3>
            <p>Asesora de proyecto de grado</p>
          </div>
          <div className="column">
            <h3>Mariana Villamizar Rodríguez</h3>
            <p>Diseño y desarrollo web</p>
          </div>
          <div className="column">
            <h3>David Daza</h3>
            <p>Desarrollo de mapa interactivo</p>
          </div>
          <div className="column">
            <img src={logo_uniandes} className="logo" alt="Logo del Centro de Investigación y Creación de la Facultad de Artes y Humanidades de la Universidad de los Andes" />
          </div>
        </div>
      </div>
      <div className="escrito">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
      </div>
    </div>
  );
}

export default Credits;
