import React from 'react';
import barberPrecio from '../../assets/img/barberPrecio.webp';
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
    { id: 1, title: 'Corte de Pelo', img: barberPrecio, icon: tijera, description: 'Servicios espléndidos que realzan tu imagen, combinando estructuras precisas con un estilo totalmente personalizado.' },
    { id: 2, title: 'Corte maquina', img: servicioCorte2, icon: maquina, description: 'Ideal para un estilo limpio y definido. Precisión y rapidez para lograr un fade en tendencia y fácil de mantener.' },
    { id: 3, title: 'Estilo Personalizado', img: servicioCorte3, icon: estiloCorte, description: 'Diseños únicos adaptados a tu personalidad y estilo. Nuestro barbero creará un corte que refleje quién eres.' },
    { id: 4, title: 'Perfilado y Detalles', img: servicioCorte4, icon: cuchilla, description: 'Un afeitado clásico con técnica y estilo, dejando tu piel suave, con un acabado impecable y una frescura inigualable.' }
];

const ServicesSection = () => (
    <section className="container py-5 services-section" style={{ marginTop: '-180px' }}>

        {/* Título y descripción */}
        <section className="container-fluid p-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
                        <p className="fw-bold text-center" style={{ fontSize: 'clamp(20px, 5vw, 40px)', textTransform: 'uppercase' }}>
                            Nuestro servicio
                        </p>

                        <div className="d-flex justify-content-center">
                            <img src={separador} alt="separador" style={{ width: '120px', height: 'auto', margin: '10px 0' }} />
                        </div>

                        <p style={{ fontSize: '16px', textAlign: 'center', padding: '10px' }}>
                            Nuestro servicio está diseñado para ofrecerte una experiencia única. Con un enfoque personalizado, nos aseguramos de que cada corte, afeitado y detalle se ajuste a tus necesidades.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Servicios con separación central */}
        {services.map((service) => (
            <div key={service.id} className="row align-items-center mb-5">
                {/* Imagen - 5 columnas */}
                <div className="col-12 col-lg-5 d-flex justify-content-center">
                    <img src={service.img} alt={service.title} className="service-img rounded" style={{ width: '100%', height: 'auto' }} />
                </div>

                {/* Columna vacía - 2 columnas */}
                <div className="d-none d-lg-block col-lg-2"></div>

                {/* Contenido - 5 columnas */}
                <div className="col-12 col-lg-5 d-flex flex-column align-items-center justify-content-center">
                    <div className="service-content text-center">
                        <img src={service.icon} alt="icon" className="service-icon mb-2" />
                        <h3 className="service-title mb-3">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                    </div>
                </div>
            </div>
        ))}

        {/* Ubicación */}
        <h3 className="text-center mb-5">UBICACIÓN</h3>
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1792336693805!6m8!1m7!1sZaFmCQxn8NmMYezBs5Jigg!2m2!1d2.486657322117287!2d-76.56688408210842!3f84.97!4f7.189999999999998!5f0.7820865974627469"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación BarberStyle"
            ></iframe>
        </div>
    </section>
);

export default ServicesSection;