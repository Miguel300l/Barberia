import React, { useEffect, useState } from "react";
import { datosInicio, verPro, verProfesionales } from "../data/DataInicioSesion";
import FechaNotificacion from './../../assets/js/FechaNotificacion';
import { useNavigate } from 'react-router-dom'



const Contenido = () => {

  const navigate = useNavigate()
  const [dataInicio, setDataInicio] = useState([]);
  const [dataPro, setDataPro] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const datos = await datosInicio()
      const destacados = datos.filter(evento => evento.tipo === "noticia");
      const dataPro = await verProfesionales();
      setDataInicio(destacados.reverse())
      setDataPro(dataPro)

    }
    fetchData();
  }, [])


  return (<>
    <div className="card-group justify-content-around">
      {dataInicio.map((data) => (
        <div className="card mx-sm-5 my-sm-5 border rounded-0" key={data._id}>
          <img className="card-img-top"
            src={data.imagen.urlImg}
            alt="img" />
          <div className="card-body">
            <h5 className="card-title text-uppercase text-center mb-3">
              {data.titulo}
            </h5>
            <p className="card-text">
              {data.descripcion}
            </p>
            <p>
              {data.pdf.urlPdf ? <p>
                <a href={data.pdf.urlPdf} target="_blank" rel="noopener noreferrer">Ver documento</a>
              </p> : ""}
            </p>
          </div>
          <div className="card-footer bg-green">
            <small className="text-muted1">
              {data.updatedAt ? FechaNotificacion(data.updatedAt) : ""}
            </small>
          </div>
        </div>

      ))
      }
    </div>
 
  </>
  );
};

export default Contenido;
