import React from "react";
import Dogmision from '../../assets/img/dogmision.jpg'
import Dogvision from '../../assets/img/Dog2.webp'
import Historia from '../../assets/img/historia.jpg'
import Video from '../../assets/img/videos/video de dog.mp4'
import Centro from '../../assets/img/dognosotros.webp'


const Nosotros = () => {
  return (
    <>
      {/* <!-- Inicio Section --> */}
      <section className="">
        <img src={Centro} className="titulo-objetivo" alt="" />
        <section className="container-fluid py-5">
  <div className="row d-flex flex-wrap justify-content-center align-items-center">
    <div className="col-md-6">
      <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
        <h5 className="fw-bold fs-4 titulos text-center">MISIÓN</h5>
        <p>
          En mascotas, nuestra misión es unir corazones peludos con hogares amorosos. 
          Nos comprometemos a ser un puente confiable entre las mascotas que necesitan un lugar donde ser amadas y cuidadas, 
          y las personas que anhelan la compañía y la alegría que solo un compañero peludo puede brindar.
        </p>
      </div>
    </div>
      <img src={Dogmision} className="img-fluid img-nosotros" alt="" />
  </div>
</section>

      </section>
      <section className="container-fluid py-5">
  <div className="row d-flex flex-wrap justify-content-center align-items-center">
      <img src={Dogvision} className="img-fluid img-nosotros" alt="" />
    <div className="col-md-6">
      <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
        <h5 className="fw-bold fs-4 titulos text-center">VISIÓN</h5>
        <p>
          En un mundo donde todas las mascotas encuentren su lugar en un hogar lleno de amor, 
          en mascotas trabajamos incansablemente para hacer realidad esta visión.
          Nos esforzamos por ser un recurso accesible y compasivo para aquellos que desean adoptar, 
          fomentando una cultura de adopción responsable y cuidado amoroso para todas las criaturas peludas.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* <!-- Fin section --> */}

      {/* <!-- Video --> */}

      <section className="video d-flexr align-items-center justify-content-center">
        <p className="fs-1 fw-semibold text-center titulos">
          RECUERDOS CON TU MASCOTA
        </p>
        <video src={Video} className="w-75 border border-1 border-secondary rounded" style={{ height: "auto" }} controls></video>
      </section>



      {/* <!-- Fin Video --> */}

      <section className="container-fluid py-5">
  <div className="row d-flex flex-wrap justify-content-center align-items-center">
    <div className="col-md-6">
      <div className="d-flex flex-column fs-5 nosotros" style={{ textAlign: 'justify' }}>
        <h5 className="fw-bold fs-4 titulos text-center">HISTORIA</h5>
        <p>
          La historia de mascotas: Un refugio de amor y esperanza para nuestras amadas mascotas.
          Hace varios años, un grupo de amantes de los animales se unió con un propósito común: 
          proporcionar un hogar seguro y amoroso para las mascotas que habían sido abandonadas,
          maltratadas o simplemente habían perdido su camino. Con este objetivo en mente, 
          nació mascotas.
          Desde ese momento, hemos trabajado incansablemente para rescatar a los animales más necesitados,
          brindándoles atención médica, alimentación y, lo más importante, cariño y afecto. 
          Cada animal que llega a nuestras puertas tiene una historia única, 
          pero todos comparten el deseo de encontrar un hogar donde puedan ser amados y cuidados como se merecen.
        </p>
      </div>
    </div>
      <img src={Historia} className="img-historia" alt="" />
  </div>
</section>


    </>
  );
};

export default Nosotros;

