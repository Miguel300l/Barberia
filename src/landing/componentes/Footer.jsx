import React, { useEffect, useState } from "react";

import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram1.png";
import Twitter from "../../assets/img/twitter.png";
import Whatsapp from "../../assets/img/whatsapp.png";
import barberLogo from "../../assets/img/barberLogo.png";
import { Link } from "react-router-dom";


const Fotter = () => {




  return (
    <div>


      <footer>
        <div className="container-fluid bg-color-blue px-5 pt-5" style={{ marginTop: '-100px' }}>
          <div className="row" style={{ marginTop: '80px' }}>
            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="box d-flex align-items-center justify-content-center" style={{ width: '18rem', backgroundColor: '#1E1E1E', minHeight: '230px' }}>
                <div className="card-body text-center">
                  <h5 className="card-title text-white" style={{ fontSize: '18px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', marginTop: '-40px' }}>
                    Ubicación
                  </h5>
                  <p className="card-text text-white mt-3">
                    123 Main Street<br />#4545 00 Chavez Ave,<br />Hernando VA
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="box d-flex align-items-center justify-content-center" style={{ width: '18rem', backgroundColor: '#1E1E1E', minHeight: '230px' }}>
                <div className="card-body text-center">
                  <h5 className="card-title text-white" style={{ fontSize: '18px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', marginTop: '10px' }}>
                    Horario de atención
                  </h5>
                  <p className="card-text text-white mt-3">
                    Lunes a sábado:<br />9:00 a. m. a 8:00 p. m.<br /><br />Domingo:<br />9:00 a. m. a 5:00 p. m.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="box d-flex align-items-center justify-content-center" style={{ width: '18rem', backgroundColor: '#1E1E1E', minHeight: '230px' }}>
                <div className="card-body text-center">
                  <h5 className="card-title text-white" style={{ fontSize: '18px', fontFamily: 'Bebas Neue', textTransform: 'uppercase', marginTop: '-40px' }}>
                    Información de contacto
                  </h5>
                  <p className="card-text text-white mt-3">
                    3208964236<br /><br />barberia@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 text-center">
            <img src={barberLogo} alt="Logo" className="img-logo mx-auto d-block" />
          </div>

          <div className="row justify-content-center flex-wrap text-center">
            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/">
                INICIO
              </Link>
            </div>
            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/nosotros">
                NOSOTROS
              </Link>
            </div>
            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/servicios">
                SERVICIOS
              </Link>
            </div>
            <div className="col-auto my-2">
              <Link className="nav-link active text-white" to="/galeria">
                GALERIA
              </Link>
            </div>
          </div>

          <div className="row justify-content-center flex-wrap text-center">
            <div className="col-auto my-2">
              <Link className="nav-link text-white" to="/precios">
                PRECIOS
              </Link>
            </div>
          </div>



          <hr className="text-white mt-4" />
          <div className="d-flex flex-wrap justify-content-center pb-3">
            <a
              href="https://www.facebook.com/groups/2772755296109525/?ref=share&mibextid=NSMWBT" target="_blank"
              className="text-decoration-none"
            >
              <img src={Facebook} className="me-2 icon" alt="logofacebook" style={{ width: '24px', height: '24px' }} />
            </a>

            <a
              href="https://m.twitch.tv/isaylosdogs" target="_blank"
              className="ms-4 text-decoration-none"
            >
              <img src={Twitter} className="me-2 icon" alt="logotwiter" style={{ width: '24px', height: '24px' }} />
            </a>

            <a
              href="https://www.instagram.com/comedogpopayan/?hl=es"
              target="_blank"
              className="ms-4 text-decoration-none"
            >
              <img
                src={Instagram}
                className="me-2 icon"
                alt="logoinstagram"
                style={{ width: '24px', height: '24px' }}
              />
            </a>

            <a href="https://chat.whatsapp.com/GIDEP3wMElmLLRSJcqyW6u" target="_blank" className="ms-4 text-decoration-none ">
              <img src={Whatsapp} className="me-2 icon" alt="logoWhatsaap" style={{ width: '24px', height: '24px' }} />
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;
