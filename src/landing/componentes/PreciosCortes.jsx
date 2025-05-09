import React from 'react';
import tijera from '../../assets/img/tijera.svg';
import maquina from '../../assets/img/maquina.svg';
import estiloCorte from '../../assets/img/estiloCorte.svg';
import cuchilla from '../../assets/img/cuchilla.svg';
import sillaIcon from '../../assets/img/sillaIcon.svg';
import '../../assets/css/circuloEstadistica.css'

const services = [
  {
    icon: tijera,
    title: 'CORTE DE PELO',
    price: '18.000',
    description: 'Un corte preciso y personalizado que realza tu estilo y se adapta a tu personalidad.',
  },
  {
    icon: maquina,
    title: 'CORTE MAQUINA',
    price: '21.000',
    description: 'Estilo limpio y definido con máquina, ideal para un look moderno y de fácil mantenimiento.',
  },
  {
    icon: cuchilla,
    title: 'AFEITAR',
    price: '11.000',
    description: 'Afeitado clásico y preciso que cuida tu piel y ofrece una sensación de frescura duradera.',
  },
  {
    icon: estiloCorte,
    title: 'RECORTE DE BARBA',
    price: '10.000',
    description: 'Perfilado y recorte de barba para un look limpio y elegante, resaltando tu estilo personal.',
  },
  {
    icon: sillaIcon,
    title: 'MASAJE DE CABEZA',
    price: '12.000',
    description: 'Disfruta de un masaje relajante que alivia las tensiones acumuladas en el cuello y cabeza.',
  },
];

export default function ServicesList() {
  return (
    <div className="container-md" style={{marginTop:'-167px'}}>
      <div className="services-wrapper">
        <ul className="list-unstyled services-list">
          {services.map((service, idx) => (
            <li key={idx} className="service-item mb-4">
              <div className="d-flex align-items-center service-header">
                <img src={service.icon} alt={service.title} className="service-icon" />
                <h5 className="service-title ms-3 mb-0 text-uppercase">
                  {service.title}
                </h5>
                <div className="dots flex-grow-1 mx-3"></div>
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-desc mt-2 mb-0 text-center">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
