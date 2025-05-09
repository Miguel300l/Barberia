import React from 'react';
import tijera from '../../assets/img/tijera.svg';
import cuchilla from '../../assets/img/cuchilla.svg';
import maquina from '../../assets/img/maquina.svg';
import servicioCorte1 from '../../assets/img/servicioCorte.jpeg';
import servicioCorte4 from '../../assets/img/servicioCorte4.jpeg';
import servicioCorte2 from '../../assets/img/servicioCorte2.jpeg';
import separador from '../../assets/img/separador.svg';

const ServiceItem = ({ icon, title, price, description, image, reverse }) => (
  <div className={`row g-4 align-items-center my-5 ${reverse ? 'flex-md-row-reverse' : ''}`}>
    <div className="col-md-6 d-flex flex-column flex-md-row align-items-center text-center text-md-start">
      <div className="me-md-4 mb-3 mb-md-0">
        <img src={icon} alt="" style={{ width: '70px', height: '70px' }} />
      </div>
      <div className="w-100">
        <h4
          className="d-flex align-items-center justify-content-center justify-content-md-start mb-3"
          style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontFamily: '"Bebas Neue", sans-serif' }}
        >
          <span className="me-2 text-uppercase fw-bold">{title}</span>
          <span className="d-none d-md-block flex-grow-1 border-bottom border-2 border-dotted"></span>
          <span className="ms-2 fw-bold">{price}</span>
        </h4>
        <p className="text-muted" style={{ fontSize: '15px' }}>{description}</p>
      </div>
    </div>

    <div className="col-md-6 text-center">
      <img src={image} alt={title} className="img-fluid rounded" style={{ maxWidth: '460px', width: '100%' }} />
    </div>
  </div>
);

const Services = () => (
  <div className="container py-5" style={{ marginTop: '-160px' }}>
    {/* Cabecera */}
    <section className="text-center mb-5">
      <h2 className="fw-bold text-uppercase" style={{ fontSize: 'clamp(20px, 4vw, 40px)' }}>
        Precio Cortes
      </h2>
      <div className="d-flex justify-content-center my-3">
        <img src={separador} alt="separador" style={{ width: '120px', height: 'auto' }} />
      </div>
      <p className="mx-auto" style={{ maxWidth: '600px', fontSize: '15px' }}>
      Ofrecemos una variedad de cortes adaptados a tus necesidades y estilo. Consulta nuestros precios y elige el servicio que más se ajuste a ti, con la garantía de calidad y atención personalizada.
      </p>
    </section>

    {/* Servicios */}
    <ServiceItem
      icon={tijera}
      title="Corte de tijera"
      price="20.000"
      description="Un corte preciso y detallado realizado con tijera, ideal para un look natural y elegante que se adapta a tu estilo."
      image={servicioCorte1}
    />

    <ServiceItem
      icon={cuchilla}
      title="Corte de Navaja"
      price="10.000"
      description="Un corte de precisión con navaja para un acabado suave y definido. Ideal para un estilo moderno, limpio y de fácil mantenimiento."
      image={servicioCorte4}
      reverse
    />

    <ServiceItem
      icon={maquina}
      title="Corte de Maquina"
      price="21.000"
      description="Estilo limpio y definido con máquina. Perfecto para un look moderno y de bajo mantenimiento, ideal para todos los días."
      image={servicioCorte2}
    />
  </div>
);

export default Services;
