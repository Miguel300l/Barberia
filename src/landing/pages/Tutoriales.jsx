import React, { useEffect, useState } from "react";
import { datosInicio } from "../data/DataInicioSesion";
import FechaNotificacion from "../../assets/js/FechaNotificacion";
import nosotrosBarber from '../../assets/img/nosotrosBarber.jpg'

const Contactanos = () => {
  const [dataInicio, setDataInicio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const datos = await datosInicio();
      const soloVideos = datos.filter(
        (evento) =>
          evento.tipo === "destacado" &&
          evento.video &&
          evento.video !== "null" &&
          evento.video.trim() !== ""
      );
      setDataInicio(soloVideos.reverse());
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="position-relative w-100" style={{ height: '750px' }}>
        {/* Imagen de fondo */}
        <img
          src={nosotrosBarber}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          alt="nosotrosBarber"
          style={{ objectFit: 'cover' }}
        />

        {/* Capa oscura */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        ></div>

        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 'clamp(24px, 5vw, 50px)',
            zIndex: 2,
          }}
        >
          TUTORIALES
        </div>
      </div>
      <div className="row gx-3 justify-content-center" style={{ marginTop: '40px' }}>
        {dataInicio.map((data) => (
          <div
            key={data._id}
            className="col-auto d-flex justify-content-center mx-5 mb-4"
          >
            <div
              className="box border rounded-0 d-flex flex-column"
              style={{
                width: '100%',
                maxWidth: '400px',
                minWidth: '16rem', // Compacto en móviles
                boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff"
              }}
            >
              {/* Video */}
              <div style={{ width: "100%", aspectRatio: "16/9", flexShrink: 0 }}>
                <video
                  width="100%"
                  height="100%"
                  controls
                  style={{ objectFit: "cover", display: "block" }}
                >
                  <source src={data.video} type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>

              {/* Contenido principal */}
              <div className="mx-3 my-2 d-flex flex-column" style={{ flexGrow: 1 }}>
                <h5
                  className="text-uppercase text-center mb-2"
                  style={{
                    fontSize: "16px",
                    fontFamily: "'Bebas Neue', sans-serif"
                  }}
                >
                  {data.titulo}
                </h5>

                <p
                  className="text-body"
                  style={{
                    fontSize: "14px",
                    fontFamily: "'Lato', sans-serif"
                  }}
                >
                  {data.descripcion}
                </p>

              </div>

              {/* Footer */}
              <div className="bg-green px-3 py-1" style={{ flexShrink: 0 }}>
                <small className="text-muted1">
                  {data.updatedAt ? FechaNotificacion(data.updatedAt) : ""}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>



      <div className="p-5"></div>
    </>
  );
};

export default Contactanos;
