import React from 'react';
import servicioCorte from '../../assets/img/servicioCorte.jpeg';
import servicioCorte2 from '../../assets/img/servicioCorte2.jpeg';
import servicioCorte3 from '../../assets/img/servicioCorte3.jpeg';
import servicioCorte4 from '../../assets/img/servicioCorte4.jpeg';
import tijera from '../../assets/img/tijera.svg';
import maquina from '../../assets/img/maquina.svg';
import estiloCorte from '../../assets/img/estiloCorte.svg';
import cuchilla from '../../assets/img/cuchilla.svg';
import separador from '../../assets/img/separador.svg';
import '../../assets/css/videoSection.css'

const services = [
    { id: 1, title: 'Corte de Pelo', img: servicioCorte, icon: tijera, description: 'Es mucho más que solo un estilo; es una declaración de quién eres. Ya sea que busques un look clásico, moderno o atrevido, nuestros profesionales se aseguran de que cada corte se ajuste perfectamente a tu personalidad y tipo de rostro.' },
    { id: 2, title: 'Corte maquina', img: servicioCorte2, icon: maquina, description: 'Es ideal para quienes buscan un estilo limpio y definido. Gracias a la precisión de la máquina, cada corte es exacto y uniforme, asegurando un look moderno y de fácil mantenimiento' },
    { id: 3, title: 'Estilo Personalizado', img: servicioCorte3, icon: estiloCorte, description: 'Diseños únicos adaptados a tu personalidad y estilo. Nuestro barbero creará un corte que refleje quién eres.' },
    { id: 4, title: 'Perfilado y Detalles', img: servicioCorte4, icon: cuchilla, description: 'Es el toque final que realza cualquier corte. Desde las líneas definidas en la barba hasta los contornos precisos del cabello, este servicio se enfoca en pulir cada aspecto de tu imagen. ' }
];

const ServicesSection = () => (
    <section className="container py-5 services-section" style={{ marginTop: '-180px' }}>

        <section className="container-fluid p-5">
            <div className="row d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
                        <p className="fw-bold text-center" style={{ fontSize: 'clamp(20px, 5vw, 40px)', textTransform: 'uppercase', }}>Nuestro servicio</p>

                        <div className="d-flex justify-content-center">
                            <img
                                src={separador}
                                alt="separador"
                                style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                            />
                        </div>

                        <p style={{ fontSize: '16px', textAlign: 'center', padding: '10px' }}>
                        Nuestro servicio está diseñado para ofrecerte una experiencia única. Con un enfoque personalizado, nos aseguramos de que cada corte, afeitado y detalle se ajuste a tus necesidades.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {services.map((service) => (
            <div key={service.id} className="row align-items-start mb-5 service-row">
                <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
                    <img src={service.img} alt={service.title} className="service-img rounded mb-3 mb-lg-0" />
                </div>
                <div className="col-lg-6">
                    <div className="service-content">
                        <img src={service.icon} alt="icon" className="service-icon mb-2" />
                        <h3 className="service-title mb-3">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </section>
);

export default ServicesSection;
