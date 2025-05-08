import React from 'react';
import historiaBarber from '../../assets/img/historiaBarber.jpeg';
import historiaBarber2 from '../../assets/img/historiaBarber2.jpeg';

const HistoriaBarberia = () => {

  return (
    <div className="container-fluid px-3 px-md-5" style={{ marginTop: '-30px' }}>
      {/* Sección 1 */}
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
          <div className="box card-hover" style={{ width: '20rem', margin: '10px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden', minHeight: '404px' }}>
            <img
              src={historiaBarber}
              alt="historiaBarber"
              style={{ objectFit: 'cover', height: '240px', width: '100%' }}
            />
            <div className="card-body text-center" style={{ marginTop: '6px' }}>
              <h5 className="card-title" style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', padding: '16px' }}>2004 - 2012</h5>
              <p className="card-text" style={{ fontSize: '16px', fontFamily: 'Lato' }}>
                Barbershop nació con la idea de ofrecer una experiencia auténtica y personal. En estos primeros años, construimos confianza.
              </p>

            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column justify-content-center mx-3 mx-sm-4 mx-md-0" style={{ height: '100%' }}>
          <div>
            <h5
              className="card-title text-center"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '24px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                padding: '20px',
              }}
            >
              2004 - 2012
            </h5>
            <p
              style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                textAlign: 'justify',
              }}
            >
              Desde nuestros primeros días, Barbershop comenzó como un proyecto lleno de pasión y dedicación. Nos propusimos ofrecer algo más que cortes, creando una experiencia auténtica para cada cliente.
              <br /><br />
              Fuimos creciendo paso a paso, con esfuerzo y compromiso. Nuestro equipo se fortaleció, la clientela confió en nosotros, y cada servicio se convirtió en una oportunidad de marcar la diferencia.
              <br /><br />
              Durante estos años, sentamos las bases de lo que somos hoy. Cada corte y sonrisa fue parte esencial de este recorrido. Aquí nació el estilo que nos define.
            </p>
          </div>
        </div>
      </div>

      {/* Sección 2 */}
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center mx-3 mx-sm-4 mx-md-0 mb-4 mb-md-0" style={{ height: '100%' }}>
          <div>
            <h5
              className="card-title text-center"
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: '24px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                padding: '20px',
              }}
            >
              2016 - 2024
            </h5>
            <p
              style={{
                fontSize: '16px',
                fontFamily: 'Lato, sans-serif',
                textAlign: 'justify',
              }}
            >
              Durante estos años, Barbershop se consolidó como referente en estilo y atención personalizada. Renovamos nuestra imagen, ampliamos servicios y nos adaptamos a las nuevas tendencias sin perder nuestra esencia.
              <br /><br />
              Nuestro equipo creció con profesionales apasionados y comprometidos. Mejoramos cada detalle para ofrecer experiencias únicas y resultados de alta calidad.
              <br /><br />
              Seguimos avanzando con el mismo objetivo: que cada cliente se sienta valorado, seguro y bien atendido en cada visita.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="box card-hover" style={{ width: '20rem', margin: '10px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden', minHeight: '404px' }}>
            <img
              src={historiaBarber2}
              alt="historiaBarber2"
              style={{ objectFit: 'cover', height: '240px', width: '100%' }}
            />
            <div className="card-body text-center" style={{ marginTop: '6px' }}>
              <h5 className="card-title" style={{ fontSize: '20px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', padding: '16px' }}>2016 - 2024</h5>
              <p className="card-text" style={{ fontSize: '16px', fontFamily: 'Lato' }}>
              Crecimos en estilo, equipo y experiencia. Esta etapa marcó nuestra evolución hacia una barbería moderna, sin perder la esencia.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default HistoriaBarberia;
