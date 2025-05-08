import React from 'react';
import carousel from '../../assets/img/carousel.jpg';
import carousel2 from '../../assets/img/carousel2.jpg';
import carousel3 from '../../assets/img/carousel3.jpg';
import carousel4 from '../../assets/img/carousel4.jpg';
import carousel5 from '../../assets/img/carousel5.jpg';
import carousel6 from '../../assets/img/carousel6.jpg';

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
              <div className="image-set">
                <img
                  src={carousel6}
                  alt="carousel6"
                  style={{ width: '306px', height: 'auto' }}
                />
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