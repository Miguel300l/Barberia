import React from 'react';
import ServiciosBarberia from '../componentes/Servicios';
import VideoSection from '../componentes/VideoSeccion';
import ServicesSection from '../componentes/ServicioCorte';
import BarberoServicio from '../componentes/BarberoServicio';
import servicioBarberia from '../../assets/img/servicioBarberia.jpeg'
import '../../assets/css/charla.css'

const Profesionales = () => {
  return (
    <>
      <div className="position-relative w-100" style={{ height: '750px' }}>
        {/* Imagen de fondo */}
        <img
          src={servicioBarberia}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          alt="servicioBarberia"
          style={{ objectFit: 'cover' }}
        />

        {/* Capa oscura */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        ></div>

        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 'clamp(24px, 5vw, 50px)',
            zIndex: 2,
          }}
        >
          SERVICIOS
        </div>
      </div>

      <ServiciosBarberia />
      <div className='p-5'></div>
      <VideoSection />
      <div className='' style={{marginTop: '160px'}}></div>
      <ServicesSection />
      <div className='p-5'></div>
      <BarberoServicio />
      <div className='' style={{marginTop: '100px'}}></div>
    </>
  )
}

export default Profesionales