import React from 'react';
import barberPrecio from '../../assets/img/barberPrecio.jpeg';

const estiloTitulo = {
    fontFamily: 'Bebas Neue',
    fontSize: '24px',
    fontSize: 'clamp(16px, 4vw, 24px)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
};

const precio = {
    marginLeft: '10px',
    fontFamily: 'Lato, sans-serif',
    fontSize: 'clamp(14px, 2.5vw, 18px)',
};

const ListaPrecios = () => {

    return (
        <div className="py-5 position-relative text-white">
            <div className="position-relative">
                <img
                    src={barberPrecio}
                    className="img-fluid w-100"
                    alt="barberPrecio"
                    style={{ height: '600px', objectFit: 'cover' }}
                />
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                ></div>

                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
                    <h2
                        style={{
                            fontFamily: 'Bebas Neue',
                            fontSize: 'clamp(20px, 5vw, 40px)',
                            textTransform: 'uppercase',
                            marginTop: '30px'
                        }}
                    >
                        Lista de precios
                    </h2>
                    <p
                        className="mt-2"
                        style={{
                            fontFamily: 'Lato',
                            fontSize: 'clamp(12px, 4vw, 18px)',
                            maxWidth: '900px',
                            lineHeight: 1.6,
                        }}
                    >
                        Conoce nuestra lista de precios y elige el servicio que mejor se adapte a tus necesidades. Ofrecemos una variedad de opciones para cortes, estilos y tratamientos. Los precios son los siguientes:
                    </p>

                    <div className="container mt-5 mb-5">
                        <div className="row justify-content-center" style={{ marginTop: '-80px' }}>
                            <div className="col-12 col-md-6 mb-4">
                                {/** Columna izquierda */}
                                {[
                                    {
                                        titulo: 'Corte de pelo clásico', precio: '20.000',
                                        descripcion: 'Un estilo tradicional y limpio, ideal para cualquier ocasión.',
                                    },
                                    {
                                        titulo: 'Corte de cabello', precio: '23.000',
                                        descripcion: 'Un corte de cabello personalizado para que luzcas fresco y a la moda.'
                                    },
                                    {
                                        titulo: 'Afeitado clásico', precio: '20.000',
                                        descripcion: 'Un afeitado tradicional, que deja tu piel fresca y perfectamente afeitada.'
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="mb-3 p-3 bg-transparent border rounded">
                                        <strong>{item.titulo}</strong>
                                        <span className="puntosPrecio mx-2">................................</span>
                                        <span>{item.precio}</span>
                                        <div className="text-white">{item.descripcion}</div>
                                    </div>

                                ))}
                            </div>
                            <div className="col-12 col-md-6 mb-4">
                                {/** Columna derecha */}
                                {[
                                    {
                                        titulo: 'Arreglo de la barba', precio: '12.000',
                                        descripcion: 'Un corte de barba detallado para darle forma y resaltar tu estilo.'
                                    },
                                    {
                                        titulo: 'Corte cabello largo', precio: '24.000',
                                        descripcion: 'Un corte especializado para cabellos largos, dándole forma y estilo.'
                                    },
                                    {
                                        titulo: 'Lavado de cabello', precio: '12.000',
                                        descripcion: 'Un lavado refrescante y revitalizante, utilizando productos de calidad.'
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="mb-3 p-3 bg-transparent border rounded">
                                        <strong>{item.titulo}</strong>
                                        <span className="puntosPrecio mx-2">................................</span>
                                        <span>{item.precio}</span>
                                        <div className="text-white">{item.descripcion}</div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ListaPrecios;