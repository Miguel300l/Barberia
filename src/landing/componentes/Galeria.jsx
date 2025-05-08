import React from 'react';
import barbero from '../../assets/img/barbero.jpg';
import barbero2 from '../../assets/img/barbero2.jpg';
import barbero3 from '../../assets/img/barbero3.jpeg';
import barbero4 from '../../assets/img/barbero4.jpeg';
import clienteSatisfecho from '../../assets/img/clienteSatisfecho.jpg';
import clienteSatisfecho2 from '../../assets/img/clienteSatisfecho2.jpg';
import clienteSatisfecho3 from '../../assets/img/clienteSatisfecho3.jpg';
import clienteSatisfecho4 from '../../assets/img/clienteSatisfecho4.jpg';
import servicioCorte from '../../assets/img/servicioCorte.jpeg';
import servicioCorte2 from '../../assets/img/servicioCorte2.jpeg';
import servicioCorte3 from '../../assets/img/servicioCorte3.jpeg';
import servicioCorte4 from '../../assets/img/servicioCorte4.jpeg';
import '../../assets/css/card.css'

const Galeria = () => {

 // cuántas columnas y filas ocupan las imagenes
 const items = [
    { src: clienteSatisfecho,  cols: 2, rows: 1 },
    { src: barbero2,           cols: 1, rows: 1 },
    { src: barbero3,           cols: 1, rows: 2 },
    { src: barbero4,           cols: 1, rows: 1 },
    { src: barbero,            cols: 2, rows: 2 },
    { src: clienteSatisfecho2, cols: 1, rows: 1 },
    { src: clienteSatisfecho3, cols: 1, rows: 1 },
    { src: clienteSatisfecho4, cols: 2, rows: 1 },
    { src: servicioCorte,      cols: 1, rows: 1 },
    { src: servicioCorte2,     cols: 1, rows: 2 },
    { src: servicioCorte3,     cols: 2, rows: 1 },
    { src: servicioCorte4,     cols: 1, rows: 1 },
  ];
    return (
        <div className="container py-5" style={{marginTop:'40px'}}>
        <div className="grid-dense">
          {items.map((item, idx) => (
            <div
              className="grid-item"
              key={idx}
              style={{
                gridColumnEnd: `span ${item.cols}`,
                gridRowEnd:    `span ${item.rows}`,
              }}
            >
              <img
                src={item.src}
                alt={`Galería ${idx}`}
                className="img-fluid rounded shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Galeria;
