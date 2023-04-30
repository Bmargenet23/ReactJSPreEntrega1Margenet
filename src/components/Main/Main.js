import React from 'react'
import Card from '../Cards/Cards'
import { useParams } from 'react-router-dom' 
import axios from 'axios'

//ItemListContainer

let articulos = [
  {
    sku: 1,
    articulo: "Camiseta Newells",
    año: 2020,
    category: "Nacional",
    precio: 14500,
    img: "img/productos/camisetanewells.jpg",
    marca: "Umbro"
  },
  {
    sku: 2,
    articulo: "Camiseta Barcelona",
    año: 2021,
    category: "Internacional",
    precio: 20200,
    img: "img/productos/camisetabarcelona.jpg",
    marca: "Nike"
  },
  {
    sku: 3,
    articulo: "Camiseta Argentina",
    año: 2022,
    category: "Selecciones",
    precio: 22500,
    img: "img/productos/camisetaargentina.jpg",
    marca: "Adidas"
  },
]

const Main = () => {

const {category} = useParams()
console.log(category)
const copia = articulos
const filtroCategory = category ? copia.filter ((producto) => producto.category === category) : articulos

console.log(filtroCategory, "resultado del filtro")

return (
  <div className='container'>
    <div className="row ">
      <div className='d-flex mp-2 align-self-center justify-content-center'>
      {filtroCategory.map(
        ({ sku, articulo, año, category, precio, img, marca }) => (
          <Card
            titulo={articulo}
            img={img}
            articulo={articulo}
            precio={precio}
          />
        )
      )}
      </div> 
    </div>
  </div>
)}

export default Main