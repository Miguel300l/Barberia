import React from "react";
import precios from '../../assets/img/precios.jpeg'
import separador from '../../assets/img/separador.svg';
import PreciosCortes from '../componentes/PreciosCortes'
import HorariosAtencion from '../componentes/HorariosAtencion'
import ServiciosPrecios from '../componentes/ServiciosPrecios'

const Contenido = () => {
  return (<>
    <div className="position-relative w-100" style={{ height: '750px' }}>
      {/* Imagen de fondo */}
      <img
        src={precios}
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        alt="precios"
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
          fontSize: 'clamp(24px, 5vw, 50px)',
          zIndex: 2,
        }}
      >
        PRECIOS
      </div>
    </div>

    <section className="container-fluid p-5">
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
              <p className="fw-bold text-center text-nowrap" style={{fontSize: 'clamp(18px, 4vw, 40px)', textTransform: 'uppercase', }}>Cortes y afeitados</p>

              <div className="d-flex justify-content-center">
                <img
                  src={separador}
                  alt="separador"
                  style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                />
              </div>

              <p style={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
              Estilo y precisión en cada servicio. Adaptamos cada corte y afeitado a tu rostro, cuidando cada línea y detalle para un acabado impecable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{marginTop:'100px'}}></div>
      <PreciosCortes />
      <div style={{marginTop:'180px'}}></div>
      <HorariosAtencion />
      <div style={{marginTop:'180px'}}></div>
      <ServiciosPrecios />
      <div style={{marginTop:'100px'}}></div>
  </>
  );
};

export default Contenido;
