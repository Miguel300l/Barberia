import React from 'react';
import carousel from '../../assets/img/carrucel.jpeg';
import carousel2 from '../../assets/img/carrucel2.jpeg';
import carousel3 from '../../assets/img/carrucel3.jpeg';
import carousel4 from '../../assets/img/carrucel4.jpeg';
import carousel5 from '../../assets/img/carrucel5.jpeg';
import carousel6 from '../../assets/img/carrucel6.jpeg';

const CarouselInfinito = () => {

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-content">
            <div className="image-set">
              <img
                src={carousel}
                alt="carousel"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel5}
                alt="carousel5"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel6}
                alt="carousel6"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel4}
                alt="carousel4"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel2}
                alt="carousel2"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel3}
                alt="carousel3"
                style={{ width: '306px', height: 'auto' }}
              />
            </div>
            <div className="image-set">

              <img
                src={carousel}
                alt="carousel"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel4}
                alt="carousel4"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel5}
                alt="carousel5"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel2}
                alt="carousel2"
                style={{ width: '306px', height: 'auto' }}
              />
              <img
                src={carousel3}
                alt="carousel3"
                style={{ width: '306px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselInfinito;