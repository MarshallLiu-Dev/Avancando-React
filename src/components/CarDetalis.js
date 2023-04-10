import React from 'react'

const CarDetalis = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h3>Detalhes do Carro</h3>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetalis