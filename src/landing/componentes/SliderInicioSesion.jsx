import React from 'react';
import house1 from '../../assets/img/barberCarrucel.jpeg';
import house2 from '../../assets/img/barberCarrucel2.jpeg';

const Slider = () => {

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active position-relative" style={{ height: '790px' }}>
          <img src={house1} className="d-block w-100 h-100 object-fit-cover carousel-image" alt="House 1" />
          {/* Capa oscura */}
          <div
            className="position-absolute start-0 top-0 w-100"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              height: '790px',

            }}
          ></div>
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{ opacity: 0.4 }}></div>

          <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h2 className="fw-bold beb-font" style={{ fontSize: '50px', verticalAlign: 'inherit', textTransform: 'uppercase' }}>MEN'S HAIRCUT</h2>

            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '20px' }}>
              Ofrecemos servicios de barbería clásica con estilos.
            </p>
            <a
              href="tel:3106785269"
              className="btn mt-1"
              style={{
                fontSize: '16px',
                textTransform: 'uppercase',
                backgroundColor: '#D5B981',
                color: 'white',
                border: 'none',
                padding: '10px 30px',
                borderRadius: '20px',
                display: 'inline-block',
                textDecoration: 'none'
              }}
            >
              Agendar Corte
            </a>
          </div>
        </div>

        {/* Segunda imagen con texto encima */}
        <div className="carousel-item position-relative" style={{ height: '790px' }}>
          <img src={house2} className="d-block w-100 h-100 object-fit-cover carousel-image" alt="House 2" />
          <div
            className="position-absolute start-0 top-0 w-100"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              height: '790px',
            }}
          ></div>
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{ opacity: 0.4 }}></div>

          <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h2 className="fw-bold beb-font" style={{ fontSize: '50px', verticalAlign: 'inherit', textTransform: 'uppercase' }}>MEN'S HAIRCUT</h2>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '20px' }}>
              Ofrecemos servicios de barbería clásica con estilos.
            </p>
            <a
              href="tel:3106785269"
              className="btn mt-1"
              style={{
                fontSize: '16px',
                textTransform: 'uppercase',
                backgroundColor: '#D5B981',
                color: 'white',
                border: 'none',
                padding: '10px 30px',
                borderRadius: '20px',
                display: 'inline-block',
                textDecoration: 'none'
              }}
            >
              Agendar Corte
            </a>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Slider;
