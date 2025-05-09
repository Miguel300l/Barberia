import React from 'react';
import clienteSatisfecho from '../../assets/img/clienteSatisfecho.jpg';
import clienteSatisfecho2 from '../../assets/img/clienteSatisfecho2.jpg';
import clienteSatisfecho3 from '../../assets/img/clienteSatisfecho3.jpg';
import clienteSatisfecho4 from '../../assets/img/clienteSatisfecho4.jpg';

const ClientesSatisfechos = () => {

    return (
        <div className="container" style={{ marginTop: '-100px' }}>
            <div className="row justify-content-center gx-4">
                {/* Card 1 */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                    <div className="box card-hover" style={{ width: '18rem', margin: '10px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden', minHeight: '404px' }}>
                        <img
                            src={clienteSatisfecho}
                            alt="clienteSatisfecho"
                            style={{ objectFit: 'cover', height: '240px', width: '100%' }}
                        />
                        <div className="card-body text-center" style={{ marginTop: '6px' }}>
                            <h5 className="card-title" style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase' }}>Corte maquina</h5>
                            <p className="card-text" style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                                El corte con máquina es un estilo práctico y moderno, ideal para quienes buscan comodidad y frescura.
                            </p>
                            <a href="tel:3106785269" className="btn btn" style={{ marginTop: '-6px', fontFamily: 'Lato', backgroundColor: '#D5B981', color: 'white', borderRadius: '20px' }}>
                                AGENDAR CORTE
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                    <div className="box card-hover" style={{ width: '18rem', margin: '10px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden', minHeight: '404px' }}>
                        <img
                            src={clienteSatisfecho2}
                            alt="clienteSatisfecho2"
                            style={{ objectFit: 'cover', height: '240px', width: '100%' }}
                        />
                        <div className="card-body text-center" style={{ marginTop: '6px' }}>
                            <h5 className="card-title" style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase' }}>Corte barba</h5>
                            <p className="card-text" style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                            El corte de barba ideal para mantener un estilo definido. Con máquina o tijera, se perfila según la forma del rostro.
                            </p>
                            <a href="tel:3106785269" className="btn btn" style={{ marginTop: '-6px', fontFamily: 'Lato', backgroundColor: '#D5B981', color: 'white', borderRadius: '20px' }}>
                                AGENDAR CORTE
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                    <div className="box card-hover" style={{ width: '18rem', margin: '10px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden', minHeight: '404px' }}>
                        <img
                            src={clienteSatisfecho4}
                            alt="clienteSatisfecho4"
                            style={{ objectFit: 'cover', height: '240px', width: '100%' }}
                        />
                        <div className="card-body text-center" style={{ marginTop: '6px' }}>
                            <h5 className="card-title" style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase' }}>Corte tijera</h5>
                            <p className="card-text" style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                                El corte con tijera ofrece mayor precisión. Ideal para quienes buscan un acabado natural y detallado.
                            </p>
                            <a href="tel:3106785269" className="btn btn" style={{ marginTop: '-6px', fontFamily: 'Lato', backgroundColor: '#D5B981', color: 'white', borderRadius: '20px', }}>
                                AGENDAR CORTE
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                    <div
                        className="box card-hover"
                        style={{
                            width: '18rem',
                            margin: '10px',
                            border: '2px solid #ddd',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            minHeight: '404px'
                        }}
                    >
                        <img
                            src={clienteSatisfecho3}
                            alt="clienteSatisfecho3"
                            style={{ objectFit: 'cover', height: '240px', width: '100%' }}
                        />
                        <div className="card-body text-center" style={{ marginTop: '6px' }}>
                            <h5 className="card-title" style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase' }}>Estilo corte</h5>
                            <p className="card-text" style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                            El estilo de corte refleja tu personalidad y se adapta a tus gustos. Ya sea un look clásico, moderno o urbano.
                            </p>
                            <a href="tel:3106785269" className="btn btn" style={{ marginTop: '-6px', fontFamily: 'Lato', backgroundColor: '#D5B981', color: 'white', borderRadius: '20px', }}>
                                AGENDAR CORTE
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientesSatisfechos;