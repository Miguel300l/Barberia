import React, { useEffect, useState } from 'react';
import Profesional from '../../assets/img/profesional.webp';
import Profesionalescontacto from '../../assets/img/profesionalcontacto.avif';
import Swal from 'sweetalert2';
import InicioSesion from '../modales/InicioSesion';
import axios from 'axios';
import { dataSolicitudCharla } from '../data/DataSolicitudCharla';
import { verPro, verProfesionales } from '../data/DataInicioSesion';

import '../../assets/css/charla.css'

const Profesionales = () => {

  const [fecha, setFecha] = useState("");
  const [profesional, setProfesional] = useState("");
  const [motivo, setMotivo] = useState("");



  const [dataPro, setDataPro] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const dataPro = await verProfesionales();
      console.log(dataPro)
      setDataPro(dataPro)

    }
    fetchData();
  }, [])

  //Opciones Profesionales
  const [profesionales, setProfesionales] = useState([]);

  const fechaActual = new Date();

  fechaActual.setHours(fechaActual.getHours() - 5);

  const fechaNueva = fechaActual.toISOString().slice(0, 16);



  useEffect(() => {
    const dataProfesionales = async () => {
      const data = await axios.get("/verUsuariosProfesionales")
      setProfesionales(data.data)
    }
    dataProfesionales();
  }, [])

  const validarToken = (e) => {
    const tokenApre = localStorage.getItem("Token-Aprendiz")
    const tokenPro = localStorage.getItem("Token-Profesional")
    const tokenAdmin = localStorage.getItem("Token-Administrador")
    const token = tokenApre || tokenPro || tokenAdmin
    e.preventDefault();

    if (!token) {


      Swal.fire({
        title: "Debes Iniciar Sesion Primero",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `<i  className="btn btn-green"    data-bs-toggle="modal"    data-bs-target="#exampleModal1" >  Iniciar sesion</i>`,

      })


    }
    else if (token) {
      if (tokenApre) {

        dataSolicitudCharla(fecha, profesional, motivo)
      } else {
        Swal.fire({
          title: "Eres profesional",
          icon: "warning",


        })
      }
    }
  }
  return (
    <>

      {/* <!-- Titulo --> */}
      <div className="position-relative d-inline-block w-100">
        <img src={Profesional} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center  w-100">CONTACTA UN PROFESIONAL
          <div className=" d-flex justify-content-around pt-2">
            <div className="bg-green p-1 w-25" ></div>
            <div className="bg-green p-1 w-25" ></div>
          </div>
        </h1>
      </div>
      {/* <!-- Fin Titulo --> */}
      {/* <!-- Profesionales --> */}
      <section className="py-5">
      <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center">
  <div className="w-75 fs-5" style={{ textAlign: 'justify' }}>
    <p className="text-center fw-semibold fs-3">QUE BUSCAMOS</p>
    <hr className="w-75 m-auto pb-4" />
    <p>
      Garantizar el bienestar y la felicidad de cada animal bajo su cuidado.
      Al trabajar con pasión y dedicación, estos expertos buscan proporcionar un entorno seguro,
      saludable y estimulante para las mascotas. Desde veterinarios hasta entrenadores de comportamiento,
      cada profesional tiene sus propias metas y enfoques, pero todos comparten el mismo objetivo:
      mejorar la calidad de vida de las mascotas. Buscan identificar y abordar cualquier necesidad física,
      emocional o conductual, ofreciendo soluciones personalizadas y cuidados compasivos.
      Ya sea promoviendo la salud preventiva, brindando tratamientos médicos o impartiendo técnicas de entrenamiento,
      los profesionales en cuidado de mascotas están comprometidos a crear un mundo donde cada animal pueda crecer
      y prosperar en su máximo potencial.
    </p>
  </div>
</div>

</div>

        <div className="w-100 card-group my-5">
          {dataPro.map((d) => (
            <div className="text-center mx-auto" key={d._id}>

              <div className="container">
                <input type="radio" name="dot" id='one' />
                <input type="radio" name='dot' id='two' />
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
    {/* <!-- Profesionales --> */}
    <main className="text-center d-flex flex-column justify-content-center align-items-center" id="form-charla">
        <div className='charla1 p-4'>

          <p className="fs-3 fw-semibold">CONTACTA A UNO DE NUESTROS PROFESIONALES</p>
          <div className='w-100 d-flex justify-content-center mb-3'>

            <div className="bg-green pt-1 w-50 "></div>
          </div>


          <div className='contenedor_formulario contenedor'>

            <div className=''>
            <img src={Profesionalescontacto} className="img_charla" alt="" />
              <div className=''></div>
            </div>

            <form className="formulario needs-validation  " onSubmit={validarToken} >

            <h1 className='solicita'>Contacta tu profesional</h1>

              <div className="row g-2">
                <div className="col-sm-12 mt-4 mt-md-5">
                  <div className="input-group has-validation">
                    <input type="datetime-local" className="form-control border-green" id="fecha-hora"
                      min={fechaNueva}
                      onChange={(e) => setFecha(e.target.value)} />

                  </div>
                </div>

                <div className="col-md-12 mt-4 mt-md-5">
                  <select className="form-select col-md-12 border-green" defaultValue="1" id="validationCustom04" onChange={(e) => { setProfesional(e.target.value) }}>
                    <option disable="true" >Profesionales disponibles...</option>
                    {profesionales.map((data) => (
                      <option value={data._id} key={data._id}>{data.nombres}{" "}{data.apellidos}{"  -    "}{data.profesion}</option>
                    ))
                    }
                  </select>
                </div>

                <div className="col-sm-12 mt-4 mt-md-5">
                  <textarea type="text" className="form-control border-green" id="address2" rows="5"
                    placeholder="Motivo de contacto..." onChange={(e) => setMotivo(e.target.value)}></textarea>
                </div>


                <div className="col-md-12 my-4 mt-md-5">
                  <button
                    type="submit"
                    className="btn btn-green btn-lg">Contactar</button>
                </div>
              </div>
            </form>
          </div>
          <InicioSesion />
        </div>


      </main>
    </>
  )
}

export default Profesionales