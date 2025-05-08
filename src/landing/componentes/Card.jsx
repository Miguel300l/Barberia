import React from 'react';
import barbero from '../../assets/img/barbero.jpg';
import barbero2 from '../../assets/img/barbero2.jpg';
import barbero3 from '../../assets/img/barbero3.jpeg';
import barbero4 from '../../assets/img/barbero4.jpeg';
import '../../assets/css/card.css'

const CardGiro = () => {

  return (
    <div className="container" style={{ marginTop: '-110px' }}>
      <div className="row justify-content-center">

        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3">
          <div className="card flip-card" style={{ width: '18rem' }}>
            <div className="card-front">
              <img
                src={barbero}
                alt="barbero"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-back">
              <div className="card-body text-center" style={{
                marginTop: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <h5 className="card-title" style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '24px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>John Doe</h5>
                <div style={{
                  fontFamily: 'Lato',
                  fontSize: '15px',
                  whiteSpace: 'normal',
                }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3">
          <div className="card flip-card" style={{ width: '18rem' }}>
            <div className="card-front">
              <img
                src={barbero2}
                alt="barbero2"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-back">
              <div className="card-body text-center" style={{
                marginTop: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <h5 className="card-title" style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '24px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>Carlos</h5>
                <div style={{
                  fontFamily: 'Lato',
                  fontSize: '15px',
                  whiteSpace: 'normal',
                }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3">
          <div className="card flip-card" style={{ width: '18rem' }}>
            <div className="card-front">
              <img
                src={barbero3}
                alt="barbero3"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-back">
              <div className="card-body text-center" style={{
                marginTop: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <h5 className="card-title" style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '24px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>Collie Herb</h5>
                <div style={{
                  fontFamily: 'Lato',
                  fontSize: '15px',
                  whiteSpace: 'normal',
                }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3">
          <div className="card flip-card" style={{ width: '18rem' }}>
            <div className="card-front">
              <img
                src={barbero4}
                alt="barbero4"
                className="card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-back">
              <div className="card-body text-center" style={{
                marginTop: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <h5 className="card-title" style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '24px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>Gus Fring</h5>
                <div style={{
                  fontFamily: 'Lato',
                  fontSize: '15px',
                  whiteSpace: 'normal',
                }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGiro;