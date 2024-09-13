import React from 'react'

const CardTablaPosiciones = ({ puesto }) => {
    return (
        <div className='card-posicion'>
            <img src={puesto.escudo} alt="" />
            <p>{puesto.equipo}</p>
            <p>{puesto.partidosJugados}</p>
            <p>{puesto.ganados}</p>
            <p>{puesto.perdidos}</p>
            <p>{puesto.empatados}</p>
            {/* <p>{puesto.golesFavor}</p>
                <p>{puesto.golesContra}</p> */}
            <p>{puesto.diferenciaGoles}</p>
            <p>{puesto.puntos}</p>
        </div>
    )
}

export default CardTablaPosiciones