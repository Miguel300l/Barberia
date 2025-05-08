import React from 'react';
import barberPrecio from '../../assets/img/barberPrecio.jpeg';

const estiloTitulo = {
    fontFamily: 'Bebas Neue',
    fontSize: '24px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  };

  const precio = {
    marginLeft: '10px',
  };

const ListaPrecios = () => {

    return (
        <div className="py-5 position-relative">
            <img
                src={barberPrecio}
                className="d-block w-100 object-fit-cover"
                alt="barberPrecio"
                style={{ height: '600px' }}
            />

            {/* Capa oscura encima de la imagen */}
            <div
                className="position-absolute start-0 top-0 w-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    height: '600px',
                    marginTop: '48px',
                }}
            ></div>
            <div
                className="position-absolute start-50 translate-middle-x text-white text-center"
                style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: 'clamp(24px, 5vw, 55px)',
                    textTransform: 'uppercase',
                    top: '12vh',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                }}
            >
                Lista de precios
            </div>

            <div
                className="position-absolute start-50 translate-middle-x text-white p-3 p-md-5"
                style={{
                    fontFamily: 'Lato',
                    fontSize: 'clamp(14px, 2.5vw, 18px)',
                    top: '18vh',                     
                    textAlign: 'center',
                    maxWidth: '90%',                 
                    lineHeight: '1.6',
                    transform: 'translateX(-50%)',
                }}
            >
                Conoce nuestra lista de precios y elige el servicio que mejor se adapte a tus necesidades. Ofrecemos una variedad de opciones para cortes, estilos y tratamientos. Los precios son los siguientes:
            </div>

            {/* Fila con dos columnas de tamaño 6, centradas sobre la imagen */}
            <div
                className="position-absolute start-0 end-0 text-white"
                style={{
                    top: '23vh',
                    textAlign: 'center',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                }}
            >
                <div className="row justify-content-between gx-5 servicio-fila" style={{ marginTop: '120px' }}>
                    <div className="col-12 col-md-5 mb-4 servicio-columna" > {/* Columna izquierda */}
                        <div className="row">
                            <div className="col-12 mb-3 p-3" style={estiloTitulo}>
                                Corte de pelo clásico
                                <span className="puntosPrecio">.....................................</span>
                                <span style={precio}>20.000</span>
                                <div className="estilo-descripcion">
                                    Lorem ipsum dolor sit amet, consetetur adipicing elit.
                                </div>
                            </div>
                            <div className="col-12 mb-3 p-3" style={estiloTitulo}>
                                Corte de cabello y barba
                                <span className="puntosPrecio">............................</span>
                                <span style={precio}>23.000</span>
                                <div className="estilo-descripcion">
                                    Lorem ipsum dolor sit amet, consetetur adipicing elit.
                                </div>
                            </div>

                            <div className="col-12 mb-3 p-3" style={estiloTitulo}>
                                Afeitado clásico y barba
                                <span className="puntosPrecio">............................</span>
                                <span style={precio}>20.000</span>
                                <div className="estilo-descripcion">
                                    Lorem ipsum dolor sit amet, consetetur adipicing elit.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 mb-4 servicio-columna" style={{ position: 'relative', left: '-160px' }}
                    > {/* Columna derecha */}
                        <div className="row">
                            <div className="col-12 mb-3 p-3" style={estiloTitulo}>
                                Estilizacion y arreglo de la barba
                                <span className="puntosPrecio">.................................</span>
                                <span style={precio}>12.000</span>
                                <div className="estilo-descripcion">
                                    Lorem ipsum dolor sit amet, consetetur adipicing elit.
                                </div>
                            </div>
                            <div className="col-12 mb-3 p-3" style={estiloTitulo}>
                                Corte de pelo clásico para cabello largo
                                <span className="puntosPrecio">.................</span>
                                <span style={precio}>24.000</span>
                                <div className="estilo-descripcion">
                                    Lorem ipsum dolor sit amet, consetetur adipicing elit.
                                </div>
                            </div>
                            <div className="col-12 mb-3 p-3" style={estiloTitulo}>
                                Corte de pelo clásico y lavado de cabello.
                                <span className="puntosPrecio">...............</span>
                                <span style={precio}>26.000</span>
                                <div className="estilo-descripcion">
                                    Lorem ipsum dolor sit amet, consetetur adipicing elit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ListaPrecios;