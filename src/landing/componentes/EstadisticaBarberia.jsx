import React from 'react';
import salonBarberia1 from '../../assets/img/salonBarberia1.jpeg';

const EstadisticaBarberia = () => {

    return (
        <div className="py-5 position-relative" style={{ marginTop: '-30px' }}>
            {/* Imagen de fondo */}
            <img
                src={salonBarberia1}
                className="d-block w-100 object-fit-cover"
                alt="salonBarberia1"
                style={{ height: '460px', objectFit: 'cover' }}
            />

            {/* Capa oscura encima de la imagen */}
            <div
                className="position-absolute start-0 top-0 w-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    height: '460px',
                    marginTop: '48px'
                }}
            ></div>

            {/* Contenedor de columnas arriba de la imagen */}
            <div
                className="container position-absolute top-50 start-50 translate-middle"
                style={{ width: '100%' }}
            >
                <div className="row w-100 text-center">
                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
                        <h4
                            className="text-white"
                            style={{
                                fontSize: '36px',
                                fontFamily: 'Lato, sans-serif',
                            }}
                        >
                            980
                        </h4>
                        <p
                            className="text-white"
                            style={{
                                fontSize: '18px',
                                fontFamily: 'Bebas Neue, sans-serif',
                            }}
                        >
                            CLIENTES SATISFECHOS
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
                        <h4
                            className="text-white"
                            style={{
                                fontSize: '36px',
                                fontFamily: 'Lato, sans-serif',
                            }}
                        >
                            12
                        </h4>
                        <p
                            className="text-white"
                            style={{
                                fontSize: '18px',
                                fontFamily: 'Bebas Neue, sans-serif',
                            }}
                        >
                            MAGOS DEL CABELLO
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
                        <h4
                            className="text-white"
                            style={{
                                fontSize: '36px',
                                fontFamily: 'Lato, sans-serif',
                            }}
                        >
                            900
                        </h4>
                        <p
                            className="text-white"
                            style={{
                                fontSize: '18px',
                                fontFamily: 'Bebas Neue, sans-serif',
                            }}
                        >
                            ELECCIÓN DE ESTILO
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <h4
                            className="text-white"
                            style={{
                                fontSize: '36px',
                                fontFamily: 'Lato, sans-serif',
                            }}
                        >
                            2
                        </h4>
                        <p
                            className="text-white"
                            style={{
                                fontSize: '18px',
                                fontFamily: 'Bebas Neue, sans-serif',
                            }}
                        >
                            PELUQUERÍAS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstadisticaBarberia;