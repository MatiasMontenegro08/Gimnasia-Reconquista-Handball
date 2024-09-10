import React from 'react'
import CardEquipo from './CardEquipo'
import './cards.css'

const CardPartidos = ({partido}) => {
    return (
        <div className='card-container-partidos'>
            <div className="card-titulos">
                <p>{partido.numerodepartido}</p>
                <p>{partido.fecha}</p>
                {Date.parse(partido.fecha) < Date.now() ? <p>finalizado</p> : <p>pendiente</p>}
            </div>
            <div className='card-body-partido'>
                <CardEquipo equipo={partido.teamA} />
                <p className='vs'>VS</p>
                <CardEquipo equipo={partido.teamB} />
            </div>
        </div>
    )
}

export default CardPartidos