import React, { useEffect, useRef } from "react";
import BarberoNosotros from '../../assets/img/barberoNosotros.jpg'
import CarouselInfinito from '../../landing/componentes/CarouselInfinito'
import separador from '../../assets/img/separador.svg';
import barbero from '../../assets/img/barbero.webp';
import barbero2 from '../../assets/img/barbero2.jpg';
import barbero3 from '../../assets/img/barbero3.jpeg';
import barbero4 from '../../assets/img/barbero4.jpeg';
import nosotrosBarber from '../../assets/img/carrusel_nosotros.jpeg'
import circuloEstadistica from '../../assets/img/circuloEstadistica.jpg'
import HistoriaBarberia from '../componentes/HistoriaBarberia'
import CircleStat from '../componentes/CirculoEstadistico'
import music from "../../assets/img/videos/musica_fondo.mp3";
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/card.css'

const Nosotros = () => {
  const audioRef = useRef(null);

  useEffect(() => {

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
    <>
      <div className="position-relative w-100 hero-nosotros" style={{ height: "750px" }}>
        {/* audio */}
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mp3" />
        </audio>
        {/* Imagen de fondo */}
        <img
          src={nosotrosBarber}
          className="position-absolute top-0 start-0 w-100 h-100 img-fade"
          alt="nosotrosBarber"
        />

        {/* Capa oscura */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay-dark"></div>

        {/* Texto */}
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center px-3 titulo-nosotros">
          SOBRE NOSOTROS
        </div>

      </div>

      <section className="container py-5" style={{ marginTop: '40px' }}>
        <div
          className="row gx-5 justify-content-center align-items-center mx-auto"
          style={{ maxWidth: '1140px' }}
        >
          {/* Imagen izquierda (abajo en móviles) */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end mb-4 mb-lg-0">
            <img
              src={BarberoNosotros}
              alt="BarberoNosotros"
              className="img-fluid"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Texto a la derecha (arriba en móviles) */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column justify-content-center h-100 px-2 text-center text-lg-start">
              <p
                className="fw-bold"
                style={{
                  fontSize: 'clamp(20px, 5vw, 35px)',
                  textTransform: 'uppercase',
                  fontFamily: '"Bebas Neue", sans-serif',
                  margin: 0,
                  padding: 0,
                  whiteSpace: 'normal',
                }}
              >
                Acerca de Barbershop
              </p>

              <div className="d-flex justify-content-center justify-content-lg-start mb-3">
                <img
                  src={separador}
                  alt="separador"
                  style={{ width: '120px', height: 'auto' }}
                />
              </div>

              <p
                style={{
                  fontSize: 'clamp(14px, 4vw, 16px)',
                  fontFamily: 'Lato, sans-serif',
                  lineHeight: '1.6',
                }}
              >
                En Barbershop nos apasiona realzar tu estilo con precisión y autenticidad.
                Cada corte y perfilado es una experiencia diseñada para que te sientas y te veas mejor.
                Nuestro compromiso es ofrecer calidad, detalle y un ambiente único.
                <br /><br />
                Contamos con un equipo de profesionales dedicados a brindar un servicio excepcional.
                Desde el primer saludo hasta el toque final del peine, cada paso importa.
                Tu imagen es nuestra prioridad.
                <br /><br />
                Inspirados en la barbería clásica y moderna, fusionamos técnica, creatividad y atención personalizada.
                Ven, relájate y déjanos cuidar de tu estilo con pasión y experiencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-5"></div>
      <CarouselInfinito />

      <section className="container-fluid p-5">
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
              <p className="fw-bold text-center" style={{ fontSize: 'clamp(23px, 5vw, 40px)', textTransform: 'uppercase', }}>El equipo</p>

              <div className="d-flex justify-content-center">
                <img
                  src={separador}
                  alt="separador"
                  style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                />
              </div>

              <p style={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                Nuestro equipo está formado por barberos apasionados y expertos en estilo. Cada uno aporta su talento, dedicación y creatividad para ofrecerte una experiencia única y personalizada. Conoce a las manos detrás de cada transformación.
              </p>
            </div>
          </div>
        </div>
      </section>


      <div className="container" style={{ marginTop: '-100px' }}>
        <div className="row justify-content-center">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 d-flex flex-column align-items-center">
            <div className="box-nosotros" style={{ width: '18rem', position: 'relative' }}>
              <img
                src={barbero}
                alt="barbero"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <a
                href="https://wa.me/573103669753"
                className="btn-agendar"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '16px',
                  padding: '6px 12px',
                  color: 'white',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  backgroundColor: '#C59D5F',
                  borderRadius: '20px',
                }}
              >
                Agendar Cita
              </a>
            </div>
            <h3
              className="card-title mt-2"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '28px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                marginBottom: '5px',
              }}
            >
              Jhonatan'S
            </h3>
            <div style={{ fontFamily: 'Lato', fontSize: '16px' }}>Barbero.</div>
          </div>
        </div>
      </div>

      <section className="container-fluid" style={{ marginTop: '-40px' }}>
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
              <p className="fw-bold text-center" style={{ fontSize: 'clamp(20px, 5vw, 40px)', textTransform: 'uppercase', }}>Nuestra historia</p>

              <div className="d-flex justify-content-center">
                <img
                  src={separador}
                  alt="separador"
                  style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                />
              </div>

              <p style={{ fontSize: '16px', textAlign: 'center', padding: '10px' }}>
                Barbershop nació con la idea de recuperar la esencia de la barbería tradicional, combinándola con un enfoque moderno. Desde nuestros inicios, buscamos crear un espacio donde cada cliente se sienta escuchado, cómodo y bien atendido.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HistoriaBarberia />

      <div className="p-4"></div>
      <div className="position-relative w-100">
        {/* Imagen de fondo */}
        <img
          src={circuloEstadistica}
          className="position-absolute top-0 start-0 w-100 h-100"
          alt="circuloEstadistica"
          style={{ objectFit: 'cover', zIndex: 0 }}
        />

        {/* Capa oscura */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1 }}
        />

        {/* Contenido sobre la imagen */}
        <div
          className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center px-3 py-5"
          style={{ zIndex: 2 }}
        >
          <div className="text-white mb-4" style={{ maxWidth: '600px' }}>
            <p
              className="fw-bold text-uppercase mb-2"
              style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)' }}
            >
              Nuestra Calidad y Trabajo
            </p>
            <img
              src={separador}
              alt="separador"
              style={{ width: '120px', height: 'auto', margin: '1rem 0' }}
            />
            <p
              style={{
                fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
              }}
            >
              Nos comprometemos con cada detalle para ofrecer resultados impecables. Combinamos técnica, productos de alta gama y pasión por lo que hacemos.
            </p>
          </div>

          {/* Estadísticas */}
          <Row className="justify-content-center w-100 gap-3 flex-wrap">
            <Col xs={12} sm="auto" className="d-flex justify-content-center">
              <CircleStat value={94} label="PROFESIONALES" />
            </Col>
            <Col xs={12} sm="auto" className="d-flex justify-content-center">
              <CircleStat value={78} label="EXPERIENCIA" />
            </Col>
            <Col xs={12} sm="auto" className="d-flex justify-content-center">
              <CircleStat value={84} label="MANOS A LA OBRA" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="p-5"></div>
      <div className="p-5"></div>
    </>
  );
};

export default Nosotros;

