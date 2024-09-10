import React from 'react'
import CardTablaPosiciones from './CardTablaPosiciones'

const TablaPosiciones = ({tablaPosiciones, categoria}) => {
    return (
        <div className='tabla-posiciones'>
            <h3>{categoria}</h3>
            {tablaPosiciones.map((posicion) => (
                <CardTablaPosiciones puesto={posicion}/>
            ))}
        </div>
    )
}

export default TablaPosiciones
