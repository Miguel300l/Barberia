import React from 'react';
import salonBarberia1 from '../../assets/img/salonBarberia1.jpeg';
import barbero3D from '../../assets/img/barbero3D.png';
import separador from '../../assets/img/separador.svg';

const BarberoServicio = () => {
  return (
    <section
      className="hero-section"
      style={{
        background: `url(${salonBarberia1}) center/cover no-repeat`,
        position: 'relative',
        width: '100%',
        height: '100vh',
        maxHeight: '480px',
        overflow: 'visible',
        zIndex: 1,
        marginTop: '20px',
      }}
    >
      {/* Overlay */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 2,
        }}
      />

      {/* Imagen del barbero sobresaliendo */}
      <img
        src={barbero3D}
        alt="mago del cabello"
        style={{
          position: 'absolute',
          top: 'clamp(-80px, -15vw, -130px)',
          left: '5%',
          height: 'auto',
          maxHeight: '610px',
          width: 'clamp(180px, 35vw, 373px)',
          zIndex: 3,
        }}
      />

      {/* Contenido */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 4,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="row w-100 align-items-center justify-content-end text-white">
          <div className="col-12 col-md-6 text-center text-md-start px-3 px-md-0">
            <h1 className="display-5 fw-bold"
              style={{
                fontSize: 'clamp(18px, 4vw, 30px)',
                fontFamily: '"Bebas Neue", sans-serif'
              }}>MAGO DEL CABELLO</h1>
            <div className="d-flex justify-content-center justify-content-md-start">
              <img
                src={separador}
                alt="separador"
                style={{ width: '100px', height: 'auto', margin: '10px 0' }}
              />
            </div>
            <p className="lead"
              style={{
                fontSize: '15px',
                fontFamily: '"Lato", sans-serif'
              }}>
              Transformamos cada corte en una experiencia única.<br />
              Con precisión, técnica y estilo, creamos más que un look.
            </p>
            <p
              style={{
                fontSize: '15px',
                fontFamily: '"Lato", sans-serif'
              }}>
              Cada trazo refleja dedicación y pasión por el detalle.<br/>
              No se trata solo de cambiar tu imagen, sino de realzar tu esencia.<br/>
              La magia está en entender lo que necesitas y superarlo.<br/>
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default BarberoServicio;
