import React from 'react';

const SatisfechoLorem = () => {

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide p-5" data-bs-ride="carousel">
            <div className="carousel-inner text-center">
                <div className="carousel-item active">
                    <p className="mb-3"
                        style={{ textTransform: 'uppercase', fontSize: '24px', fontFamily: 'Lato, sans-serif' }}>
                       "Nunca había tenido un corte tan bien hecho. El barbero fue muy <br/>atento y entendió lo que quería. Definitivamente volveré."</p>
                    <p className="fw-bold" style={{ fontSize: '18px', fontFamily: 'Lato, sans-serif' }}>Juan Pérez</p>
                    <p className="text-muted">Fotógrafo</p>
                </div>
                <div className="carousel-item">
                    <p className="mb-3"
                        style={{ textTransform: 'uppercase', fontSize: '24px', fontFamily: 'Lato, sans-serif' }}>
                       "Me sorprendió la calidad del servicio. Desde que entré,<br/> me sentí bien recibido. El resultado superó mis expectativas."</p>
                    <p className="fw-bold" style={{ fontSize: '18px', fontFamily: 'Lato, sans-serif' }}>María López</p>
                    <p className="text-muted">Diseñadora Gráfica</p>
                </div>
                <div className="carousel-item">
                    <p className="mb-3"
                        style={{ textTransform: 'uppercase', fontSize: '24px', fontFamily: 'Lato, sans-serif' }}>
                      "La atención fue excelente y el ambiente muy cómodo.<br /> El corte me quedó perfecto y la barba muy bien definida."</p>
                    <p className="fw-bold" style={{ fontSize: '18px', fontFamily: 'Lato, sans-serif' }}>Carlos Ramírez</p>
                    <p className="text-muted">Desarrollador Web</p>
                </div>
            </div>
        </div>
    );
};

export default SatisfechoLorem;