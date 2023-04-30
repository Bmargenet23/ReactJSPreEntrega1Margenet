import React from 'react'

const CardWidget = (props) => {
  const {cantidad} = props
  return (
    <div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <i className="bi bi-cart3 mx-3 badge bg-dark text-wrap">{cantidad}</i>            
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardWidget