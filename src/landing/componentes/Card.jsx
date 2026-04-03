import React from 'react';
import barbero from '../../assets/img/barbero.webp';
import '../../assets/css/card.css'

const CardGiro = () => {

  return (
    <div className="container" style={{ marginTop: '-110px' }}>
      <div className="row justify-content-center">

        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3">
          <div className="card flip-card" style={{ width: '18rem' }}>
            <div className="card-front">
              <img
                src={barbero}
                alt="barbero"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-back">
              <div className="card-body text-center" style={{
                marginTop: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <h3 className="card-title" style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '24px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>Jhonatan'S</h3>
                <div style={{
                  fontFamily: 'Lato',
                  fontSize: '15px',
                  whiteSpace: 'normal',
                }}>
                  Especialista en cortes tradicionales, diseños freestyle y perfilado de barba.
                  Me enfoco en precisión, detalle y perfección en cada servicio, para quienes buscan elegancia, distinción y un estilo que marque la diferencia.
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CardGiro;