import React from 'react'
import galeriaBar from '../../assets/img/carrusel_galeria.jpeg'
import Galeria from '../componentes/Galeria';
import LogoProducto from '../componentes/GaleriaProductos';

const Cuidados = () => {
  return (
    <>
      <div className="position-relative w-100 hero-galeria" style={{ height: '750px' }}>

        {/* Imagen de fondo */}
        <img
          src={galeriaBar}
          className="position-absolute top-0 start-0 w-100 h-100 img-galeria-zoom"
          alt="galeriaBar"
        />

        {/* Capa oscura */}
        <div className="overlay-galeria position-absolute top-0 start-0 w-100 h-100"></div>

        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3 titulo-galeria"
        >
          GALERIA
        </div>

      </div>

      <Galeria />
      <div className='' style={{ marginTop: '160px' }}></div>
      <LogoProducto />
      <div className='' style={{ marginTop: '100px' }}></div>
    </>
  );
};

export default Cuidados;
