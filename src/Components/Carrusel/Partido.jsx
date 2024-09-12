import React from 'react'

const Partido = ({partido}) => {
    return (
        <div className='container-partido'>
            <p className='partido-titulo'>{partido.numerodepartido}</p>
            <p>{partido.fecha}</p>
            <div className='container-partido-body'>
                <div className='team'>
                    <img src={partido.teamA.img} alt={partido.teamA.nombre} />
                    <p className='teamNombre'>{partido.teamA.nombre}</p>
                    {partido.teamA.goles != 0 ? <p>{partido.teamA.goles}</p> : <p>-</p>}
                </div>
                <div className='team'>
                    <img src={partido.teamB.img} alt={partido.teamB.nombre} />
                    <p className='teamNombre'>{partido.teamB.nombre}</p>
                    {partido.teamB.goles != 0 ? <p>{partido.teamB.goles}</p> : <p>-</p>}
                </div>
            </div>
        </div>
    )
}

export default Partido