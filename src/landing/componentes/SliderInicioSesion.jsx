import React, { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";

import barbershop from "../../assets/img/barbershop.jpeg";
import barbershop2 from "../../assets/img/barbershop2.jpeg";
import barbershop3 from "../../assets/img/barbershop3.jpeg";
import barbershop4 from "../../assets/img/barbershop4.jpeg";
import barbershop5 from "../../assets/img/barbershop5.jpeg";
import music from "../../assets/img/videos/musica_fondo.mp3";

const images = [
  barbershop,
  barbershop2,
  barbershop3,
  barbershop4,
  barbershop5
];

const Slider = () => {
  const audioRef = useRef(null);

  useEffect(() => {

    const carouselElement = document.querySelector("#carouselExampleSlidesOnly");

    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 6000,
        ride: "carousel",
        pause: false,
        wrap: true
      });
    }

    const startMusic = () => {

      if (audioRef.current) {
        audioRef.current.volume = 0.15;
        audioRef.current.play().catch(() => { });
      }

      window.removeEventListener("click", startMusic);
      window.removeEventListener("scroll", startMusic);

    };

    window.addEventListener("click", startMusic);
    window.addEventListener("scroll", startMusic);

  }, []);

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
      {/* audio */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>
      <div className="carousel-inner">

        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item position-relative slider-item ${index === 0 ? "active" : ""}`}
          >

            <img
              src={img}
              className="carousel-image"
              alt={`barbershop-${index}`}
            />

            <div className="overlay-dark"></div>

            <div className="slider-content text-white text-center">

              <h2 className="fw-bold beb-font slider-title">
                BARBERSTYLE
              </h2>

              <p className="slider-text">
                Ofrecemos cursos y servicios de barbería con estilo.
              </p>

              <a
                href="https://wa.me/573103669753"
                className="btn btn-agendar"
              >
                Agendar Corte
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>

  );
};

export default Slider;
