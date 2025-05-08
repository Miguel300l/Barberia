import React from 'react';
import preciosCortesBarberia from '../../assets/img/preciosCortesBarberia.webp';
import separador from '../../assets/img/separador.svg';
import '../../assets/css/estiloPrecio.css'

const horarios = [
    { dia: 'LUNES', hora: '7 am  -  10 pm' },
    { dia: 'MARTES', hora: '7 am  -  10 pm' },
    { dia: 'MIÉRCOLES', hora: '7 am  -  10 pm' },
    { dia: 'JUEVES', hora: '7 am  -  10 pm' },
    { dia: 'VIERNES', hora: '7 am  -  10 pm' },
    { dia: 'SABADO', hora: '8 a.m. a 6 p.m' },
    { dia: 'DOMINGO', hora: '8 a.m. a 6 p.m' },
];

export default function Schedule() {
    return (
        <div>
        <section
            style={{
                backgroundImage: `url(${preciosCortesBarberia})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                marginTop:'-120px'
            }}
        >
            {/* Capa oscura */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    zIndex: 1,
                }}
            />
    
            {/* Contenido principal */}
            <div className="container position-relative text-white z-2" style={{ zIndex: 2 }}>
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-8">
                        <p
                            className="fw-bold text-nowrap"
                            style={{
                                fontSize: 'clamp(24px, 5vw, 50px)',
                                textTransform: 'uppercase',
                            }}
                        >
                            Horario de atención
                        </p>
    
                        <div className="d-flex justify-content-center">
                            <img
                                src={separador}
                                alt="separador"
                                style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                            />
                        </div>
    
                        <p style={{ fontSize: '16px', textAlign: 'center', padding: '10px' }}>
                        Ofrecemos un servicio flexible para adaptarnos a tus necesidades. Consulta nuestros horarios y reserva tu cita cuando más te convenga.
                        </p>
                    </div>
                </div>
    
                <div className="row justify-content-center" style={{marginTop:'-40px'}}>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 border p-4 rounded bg-dark bg-opacity-75">
                        {horarios.map((item, index) => (
                            <div className="horario-line d-flex justify-content-between py-1" key={index}>
                                <span className="dia">{item.dia}</span>
                                <span className="hora">{item.hora}</span>
                            </div>
                        ))}
                        <div className="text-center mt-4">
                            <a
                                href="tel:3106785269"
                                className="btn"
                                style={{
                                    marginTop: '-6px',
                                    fontFamily: 'Lato',
                                    padding: '10px 40px',
                                    backgroundColor: '#D5B981',
                                    color: 'white',
                                    borderRadius: '20px',
                                }}
                            >
                                FIJAR CITA
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    );
}
