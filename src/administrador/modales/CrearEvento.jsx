import React, { useState, useEffect } from 'react';
import { crearEvento } from '../data/DataAdmin';



const CrearEvento = () => {

  const [evento, setEvento] = useState("");
  const [tipoEvento, setTipoEvento] = useState("");
  const [lugar, setLugar] = useState("");
  const [fechaInicial, setFechaInicial] = useState("");
  const [imagenes, setImagenes] = useState(null);
  const [video, setVideo] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [descripcion, setDescripcion] = useState("");

  const fechaActual = new Date();
  fechaActual.setHours(fechaActual.getHours() - 5);
  const fechaInicio = fechaActual.toISOString().slice(0, 16);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fechaInicial);
    const formData = new FormData();
    formData.append("titulo", evento)
    formData.append("lugar", lugar)
    formData.append('tipo', tipoEvento)
    formData.append('fecha_inicio', fechaInicial)
    formData.append('eventoImg', imagenes)
    formData.append('pdf', pdf)
    formData.append('video', video);
    formData.append('descripcion', descripcion)

    crearEvento(formData);
  };

  const selectFuncion = (e) => {
    setTipoEvento(e);
  };

  // Condiciones para mostrar u ocultar campos
  const mostrarLugar = tipoEvento === "noticia";
  const mostrarImagen = tipoEvento === "noticia";
  const mostrarVideo = tipoEvento === "destacado";
  const mostrarPdf = tipoEvento === "destacado";

  useEffect(() => {
    if (!window.cloudinary) return;

    window.myVideoWidget = window.cloudinary.createUploadWidget(
      {
        cloud_name: 'dmzhkgiwu',
        uploadPreset: "ml_default",
        folder: "videos",
        resourceType: "video",
        sources: ["local", "camera", "url"],
      },
      (error, result) => {
        if (!error && result.event === "success") {
          console.log("Video subido:", result.info);
          setVideo(result.info.secure_url);
        }
      }
    );
  }, []);

  const abrirWidgetVideo = () => {
    if (window.myVideoWidget) {
      window.myVideoWidget.open();
    }
  };

  return (
    <>
      {/* Modal CREAR EVENTO */}
      <div className="modal fade" id="exampleModalIN" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content text-white" style={{ backgroundColor: "#1E1E1E" }}>
            <div className="modal-header">
              <h3 className="modal-title w-100 text-center" id="exampleModalINLabel">CREAR EVENTO</h3>
              <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mt-4">
              <form className="row g-2 needs-validation" onSubmit={handleSubmit}>
                {/* Tipo de evento */}
                <div className="col-12 mt-0" style={{ padding: "0 50px" }}>
                  <label htmlFor="exampleFormControlSelect1" className="form-label">CATEGORIA EVENTO</label>
                  <select value={tipoEvento} className="form-control" id="exampleFormControlSelect1" onChange={(e) => selectFuncion(e.target.value)}>
                    <option value="">Seleccionar...</option>
                    <option value="destacado">Tutorial</option>
                    <option value="noticia">Evento</option>
                  </select>
                </div>

                {/* Nombre del evento */}
                <div className="col-12 mt-0 mt-4" style={{ padding: "0 50px" }}>
                  <label htmlFor="validationCustom01" className="form-label">TITULO</label>
                  <input type="text" className="form-control" placeholder="Titulo" id="validationCustom01" value={evento} onChange={(e) => setEvento(e.target.value)} />
                </div>

                {tipoEvento === "noticia" && (
                  <div className="col-12 mt-0 mt-4" id="div-lugar" style={{ padding: "0 50px" }}>
                    <label htmlFor="validationCustom01" className="form-label">LUGAR EVENTO</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lugar adopción"
                      id="validationCustom01"
                      value={lugar}
                      onChange={(e) => setLugar(e.target.value)}
                    />
                  </div>
                )}

                {/* Fecha y hora de inicio */}
                <div className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                  <label htmlFor="validationCustom02" className="form-label">FECHA Y HORA DE INICIO</label>
                  <input type="datetime-local" className="form-control" min={fechaInicio} id="validationCustom02" value={fechaInicial} onChange={(e) => setFechaInicial(e.target.value)} />
                </div>

                {mostrarImagen && (
                  <div className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                    <label htmlFor="validationCustom01" className="form-label">ADJUNTAR IMAGEN</label>
                    <input
                      type="file" className="form-control" placeholder='Ingresar descripcion' accept="image/*" id="validationCustom01"
                      onChange={(e) => setImagenes(e.target.files[0])}
                    />
                  </div>
                )}

                {/* Adjuntar Video (solo para 'destacado') */}
                {tipoEvento === "destacado" && (
                  <div className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                    <label className="form-label">ADJUNTAR VIDEO</label>
                    <button
                      type="button"
                      onClick={abrirWidgetVideo}
                      className="btn btn-light w-100"
                    >
                      SUBIR VIDEO
                    </button>

                    {video && (
                      <div className="mt-2">
                        <video controls width="100%">
                          <source src={video} type="video/mp4" />
                          Tu navegador no soporta la reproducción de video.
                        </video>
                      </div>
                    )}
                  </div>
                )}

                {/* Descripcion */}
                <div className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                  <label htmlFor="validationCustom01" className="form-label">DESCRIPCION</label>
                  <textarea type="text" rows="3" className="form-control" value={descripcion} placeholder="Ingresar descripcion" id="validationCustom01" onChange={(e) => setDescripcion(e.target.value)} />
                </div>

                {/* Botón CREAR EVENTO */}
                <div className="col-12 d-flex justify-content-center mb-2 pb-6 pt-4">
                  <button
                    className="btn"
                    type="submit"
                    style={{
                      backgroundColor: "#000000",
                      color: "white",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "16px"
                    }}
                  >
                    CREAR EVENTO
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* FinModal MODAL CREAR EVENTO */}
    </>
  );
};

export default CrearEvento;
