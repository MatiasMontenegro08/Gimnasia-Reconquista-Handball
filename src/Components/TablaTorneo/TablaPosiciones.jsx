import React from 'react'
import CardTablaPosiciones from './CardTablaPosiciones'

const TablaPosiciones = ({tablaPosiciones, categoria}) => {
    return (
        <div className='tabla-posiciones'>
            <h3>{categoria}</h3>
            <div className='card-encabezado'>
                <p>Equipo</p>
                <p>PJ</p>
                <p>PG</p>
                <p>PP</p>
                <p>PE</p>
                <p>DIF</p>
                <p>PTS</p>
            </div>
            {tablaPosiciones.map((posicion) => (
                <CardTablaPosiciones puesto={posicion}/>
            ))}
        </div>
    )
}

export default TablaPosiciones
