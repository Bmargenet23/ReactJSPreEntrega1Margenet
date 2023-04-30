import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Cards.css';



const Cards = (props) => {
  const {sku,articulo,año,category,precio,img,marca} = props;

  return (
    <div className="card shadow m-2 p-2 bg-body w-25 ">
      <img
      src={img}
      className="card-img-top"
      alt={articulo}
      />
    <div className="card-body ">
        <h4 className="card-title">{articulo}</h4>
        <h5>$ {precio}</h5>
        <NavLink className="btn btn-primary fondoBoton" to={'/marca/'+{sku}}>Detalle</NavLink>
    </div>
    </div>
  )
}

export default Cards