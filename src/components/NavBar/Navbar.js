import React from 'react'
import Carrito from '../Carrito/Carrito'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Camisetas Fanatics</NavLink>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Camisetas
                      </a>
                    <ul class="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="/category/Nacional">Nacionales</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/category/Internacional">Internacionales</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/category/Selecciones">Selecciones</NavLink></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active">Ayuda</a>
                  </li>
                </ul>
              </div>
              <Carrito cantidad={0}/>
          </div>
        </nav>
    </div>
    
  )
}

export default Navbar