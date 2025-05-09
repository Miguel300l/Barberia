import React from 'react'
import galeriaBar from '../../assets/img/galeriaBar.jpeg'
import Galeria from '../componentes/Galeria';
import LogoProducto from '../componentes/GaleriaProductos';

const Cuidados = () => {
  return (
    <>
      <div className="position-relative w-100" style={{ height: '750px' }}>
        {/* Imagen de fondo */}
        <img
          src={galeriaBar}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          alt="galeriaBar"
          style={{ objectFit: 'cover' }}
        />

        {/* Capa oscura */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        ></div>

        {/* Texto centrado */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 'clamp(24px, 5vw, 50px)', // responsivo: mínimo 24px, máximo 50px
            zIndex: 2,
          }}
        >
          GALERIA
        </div>
      </div>

      <Galeria />

      <div className='' style={{ marginTop: '160px' }}></div>
      <LogoProducto />
      <div className='' style={{marginTop: '100px'}}></div>
    </>
  );
};

export default Cuidados;
