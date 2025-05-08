import React from 'react';
import separador from '../../assets/img/separador.svg';

const SatisfechoText = () => {
    return (
        <section className="container-fluid p-5" style={{marginTop:'-40px'}}>
            <div className="row d-flex flex-wrap justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
                        <p className="fw-bold text-center text-nowrap" style={{ fontSize: 'clamp(18px, 4vw, 40px)', textTransform: 'uppercase', }}>Clientes satisfechos</p>
                        <div className="d-flex justify-content-center">
                            <img
                                src={separador}
                                alt="separador"
                                style={{ width: '120px', height: 'auto', margin: '10px 0' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SatisfechoText;