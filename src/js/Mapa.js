import React from 'react';
import bola from '../images/bola.png';
import titulo from '../images/mapa-medios.svg';
import '../css/Mapa.css';

function Mapa() {
  return (
    <div className="mapa">
      <div className="titulo">
        <img src={bola} className="ill" alt="Collage" />
        <img src={titulo} className="text" alt="Mapa de medios" />
      </div>
      <div className="plot">
        Aquí va el mapa
      </div>
    </div>
  );
}

export default Mapa;
