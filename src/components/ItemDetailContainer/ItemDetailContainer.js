import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Main from '../Main/Main.js'


const ItemDetailContainer = () => {
    // const {sku} = useParams()

    // const filtroSku = sku ? articulos.filter ((producto) => producto.marca === marca) : articulos

  return (
  <div class="container text-center">
    <div class="row">
      <div class="col">
      <img src="..."></img>
      </div>
      <div class="col">
      <ul>
        <li>"..."</li>
        <li>Precio: "..."</li>
      </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
      Column
      </div>
    </div>
  </div>
  )
}

export default ItemDetailContainer