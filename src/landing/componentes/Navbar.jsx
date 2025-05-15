import React, { useState, useEffect, useRef } from 'react';
import Horizontal from "../../assets/img/barberLogo.png";
import Favicon2 from "../../assets/img/barberLogo.png";
import "../../assets/css/navbar.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
// Modales
import InicioSesion from '../modales/InicioSesion'
import DatosAjustes from '../modales/Ajustes'
import NotificacionAseptar from '../modales/AceptarRechazarCharla'
import RegistroAprendiz from '../modales/RegistroAprendiz'
import RegistroProfesional from '../modales/RegistroProfesional'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const collapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    const collapseElement = document.getElementById("navbarSupportedContent");
    const bsCollapse = new window.bootstrap.Collapse(collapseElement, {
      toggle: false,
    });
    bsCollapse.hide();
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'bg-custom' : 'bg-transparent'}`}
        id="menu"

      >
        <div className="container-fluid" id="img-slider">
          <Link className="navbar-brand" to="/">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img
              src={Favicon2}
              alt="Logo"
              className="img-logo-mini d-none me-auto"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse opciones-navbar"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fs-6 ">
                <Link className="nav-link custom-link" aria-current="page" to="/" onClick={handleLinkClick}>
                  INICIO
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link className="nav-link custom-link" to="/nosotros" onClick={handleLinkClick}>
                  NOSOTROS
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link className="nav-link custom-link" to="/servicios" onClick={handleLinkClick}>
                  SERVICIOS
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link className="nav-link custom-link" to="/galeria" onClick={handleLinkClick}>
                  GALERIA
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link className="nav-link custom-link" to="/precios" onClick={handleLinkClick}>
                  PRECIOS
                </Link>
              </li>
              <li className="nav-item  fs-6">
                <Link className="nav-link custom-link" to="/tutoriales" onClick={handleLinkClick}>
                  TUTORIALES
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>


      {/* Modales */}
      <InicioSesion />
      <DatosAjustes />
      <NotificacionAseptar />
      <RegistroAprendiz />
      <RegistroProfesional />

      <Outlet />
      <Footer />

    </>
  );
};

export default Navbar;
