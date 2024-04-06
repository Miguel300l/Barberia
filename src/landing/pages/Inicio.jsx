import React, { useEffect, useState } from "react";
import IconPregunta from '../../assets/img/Dog1.webp'
import { Link } from 'react-router-dom'
import Slider from '../componentes/SliderInicioSesion'
import { datosInicio, verPro, verProfesionales } from "../data/DataInicioSesion";
import FechaNotificacion from './../../assets/js/FechaNotificacion';
import { useNavigate } from 'react-router-dom'
import '../../assets/css/slider.css'


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
    <Slider />
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
    <div>
    <section className="container-fluid py-5">
  <div className="row d-flex flex-wrap justify-content-center align-items-center">
      <img src={IconPregunta} className="img-dog" alt="" />
    <div className="col-md-6">
      <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
        <p className="fw-bold fs-4 titulos text-center">¿QUE HACE MASCOTAS?</p>
        <p>
          En mascotas, nos dedicamos a cambiar vidas de perritos y personas por igual.
          Trabajamos incansablemente para rescatar, rehabilitar y encontrar hogares amorosos para mascotas necesitadas.
          Nuestra pasión es brindar una segunda oportunidad a cada animal que cruza nuestro camino,
          asegurando que reciban el cuidado, la atención y el amor que merecen.
        </p>
        <Link
          to="/nosotros"
          className="btn btn-green btn-md w-50 mt-5 "
        >
          Conoce más...
        </Link>
      </div>
    </div>
  </div>
</section>


      <section className="py-5">
        <div className="d-flex justify-content-center" style={{ textAlign: 'justify' }}>
          <div className=" w-75">
            <h4 className="fw-bold text-center fs-2 mb-3 pb-3 titulos">
              CONTACTA UN PROFESIONAL
            </h4>
            <p className="fs-5">
            Las mascotas son más que simples compañeros; son parte de nuestra familia. 
            Al igual que nosotros, requieren cuidado, atención y, en ocasiones, 
            ayuda especializada. Contactar a un profesional en mascotas no solo garantiza el bienestar de nuestros amigos peludos,
            sino que también proporciona la tranquilidad de saber que están en manos expertas.
            </p>
          </div>
        </div>

        <div className="w-100 card-group my-2">
          {dataPro.map((d) => (
            <div className="text-center mx-auto mt-2" key={d._id}>
              <div className="container">
                
                <div className="main-card">
                  <div className="cards">
                    <div className="card">
                      <div className="content" >
                        <div className="img">
                          <img src={d.perfil.urlImg} className="img-profesionales" alt="" />
                        </div>
                        <div className='details'>
                          <p className="fs-5 mb-2">
                            {d.nombres}{" "}{d.apellidos} <br /> {d.profesion}
                          </p>
                        </div>
                        <div>
                          <button onClick={() => navigate("/profesionales", { replace: true })} className="btn btn-green mt-3">
                            Contactar profesional
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          ))
          }

        </div>
      </section>
    </div>
  </>
  );
};

export default Contenido;
