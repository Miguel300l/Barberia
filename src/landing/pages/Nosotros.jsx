import React from "react";
import Dogmision from '../../assets/img/dogmision.jpg'
import BarberoNosotros from '../../assets/img/barberoNosotros.jpg'
import CarouselInfinito from '../../landing/componentes/CarouselInfinito'
import Historia from '../../assets/img/historia.jpg'
import separador from '../../assets/img/separador.svg';
import Video from '../../assets/img/videos/dog.mp4'
import barbero from '../../assets/img/barbero.jpg';
import barbero2 from '../../assets/img/barbero2.jpg';
import barbero3 from '../../assets/img/barbero3.jpeg';
import barbero4 from '../../assets/img/barbero4.jpeg';
import nosotrosBarber from '../../assets/img/nosotrosBarber.jpg'
import circuloEstadistica from '../../assets/img/circuloEstadistica.jpg'
import SatisfechoText from '../componentes/SatisfechoText'
import SatisfechoLorem from '../componentes/SatisfechoLorem'
import HistoriaBarberia from '../componentes/HistoriaBarberia'
import CircleStat from '../componentes/CirculoEstadistico'
import BarberSatisfechoN from '../../assets/img/BarberSatisfechoN.jpg'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/card.css'

const Nosotros = () => {
  return (
    <>
      <div className="position-relative w-100" style={{ height: '750px' }}>
        {/* Imagen de fondo */}
        <img
          src={nosotrosBarber}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          alt="nosotrosBarber"
          style={{ objectFit: 'cover' }}
        />

        {/* Capa oscura */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
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
              <p className="fw-bold text-center" style={{ fontSize: 'clamp(20px, 4vw, 40px)', textTransform: 'uppercase', }}>El equipo</p>

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


      <div className="container" style={{ marginTop: '-110px' }}>
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
                href="tel:3106785269"
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
                  backgroundColor: '#D5B981',
                  borderRadius: '20px',
                }}
              >
                Agendar Cita
              </a>
            </div>
            <h5
              className="card-title mt-2"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '28px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                marginBottom: '5px',
              }}
            >
              John Doe
            </h5>
            <div style={{ fontFamily: 'Lato', fontSize: '16px' }}>Barbero.</div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 d-flex flex-column align-items-center">
            <div className="box-nosotros" style={{ width: '18rem', position: 'relative' }}>
              <img
                src={barbero2}
                alt="barbero2"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <a
                href="tel:3106785269"
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
                  backgroundColor: '#D5B981',
                  borderRadius: '20px',
                }}
              >
                Agendar Cita
              </a>
            </div>
            <h5
              className="card-title mt-2"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '28px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                marginBottom: '5px',
              }}
            >
              Carlos
            </h5>
            <div style={{ fontFamily: 'Lato', fontSize: '16px' }}>Barbero.</div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 d-flex flex-column align-items-center">
            <div className="box-nosotros" style={{ width: '18rem', position: 'relative' }}>
              <img
                src={barbero3}
                alt="barbero3"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <a
                href="tel:3106785269"
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
                  backgroundColor: '#D5B981',
                  borderRadius: '20px',
                }}
              >
                Agendar Cita
              </a>
            </div>
            <h5
              className="card-title mt-2"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '28px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                marginBottom: '5px',
              }}
            >
              Collie Herb
            </h5>
            <div style={{ fontFamily: 'Lato', fontSize: '16px' }}>Barbero senior</div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 d-flex flex-column align-items-center">
            <div className="box-nosotros" style={{ width: '18rem', position: 'relative' }}>
              <img
                src={barbero4}
                alt="barbero4"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <a
                href="tel:3106785269"
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
                  backgroundColor: '#D5B981',
                  borderRadius: '20px',
                }}
              >
                Agendar Cita
              </a>
            </div>
            <h5
              className="card-title mt-2"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '28px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                marginBottom: '5px',
              }}
            >
              Gus Fring
            </h5>
            <div style={{ fontFamily: 'Lato', fontSize: '16px' }}>Barbero.</div>
          </div>
        </div>
      </div>


      <div className="py-3 position-relative">
        <img
          src={BarberSatisfechoN}
          className="d-block w-100 object-fit-cover"
          alt="BarberSatisfechoN"
          style={{ height: '660px', objectFit: 'cover' }}
        />
        {/* Capa oscura */}
        <div
          className="position-absolute start-0 top-0 w-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            height: '660px',
            marginTop: '16px',
            zIndex: 1,
          }}
        ></div>

        {/* Contenedor para centrar el texto encima de todo */}
        <div
          className="position-absolute top-50 start-50 translate-middle w-100 text-center"
          style={{
            zIndex: 2,
            color: 'white',
            padding: '0 15px',
          }}
        >
          {/* Texto responsivo */}
          <div className="fs-2 fs-md-3 fs-lg-4">
            <SatisfechoText />
          </div>
          <div className="fs-6 fs-md-5 fs-lg-6">
            <SatisfechoLorem />
          </div>
        </div>
      </div>


      <section className="container-fluid p-5">
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
          {/* Texto principal */}
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

