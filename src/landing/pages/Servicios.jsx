import React from 'react';
import ServiciosBarberia from '../componentes/Servicios';
import VideoSection from '../componentes/VideoSeccion';
import ServicesSection from '../componentes/ServicioCorte';
import BarberoServicio from '../componentes/BarberoServicio';
import servicioBarberia from '../../assets/img/carrusel_servicios.jpeg'
import '../../assets/css/charla.css'

const Profesionales = () => {
  return (
    <>
      <div className="position-relative w-100 hero-servicios" style={{ height: "750px" }}>

        {/* Imagen de fondo */}
        <img
          src={servicioBarberia}
          className="position-absolute top-0 start-0 w-100 h-100 img-servicios-zoom"
          alt="servicioBarberia"
        />

        {/* Capa oscura */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay-dark"></div>

        {/* Texto */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3 titulo-servicios"
        >
          SERVICIOS
        </div>

      </div>

      <ServiciosBarberia />
      <div className='p-5'></div>
      <VideoSection />
      <div className='' style={{ marginTop: '160px' }}></div>
      <ServicesSection />
      <div className='p-5'></div>
      <BarberoServicio />
      <div className='' style={{ marginTop: '100px' }}></div>
    </>
  )
}

export default Profesionales