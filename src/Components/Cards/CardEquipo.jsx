import React from 'react'

const CardEquipo = ({equipo}) => {
    return (
        <div className="team">
            <div className="teamImg">
                <img src={equipo.img} alt={equipo.nombre} />
                <p>{equipo.nombre}</p>
            </div>
            <p>{equipo.goles}</p>
        </div>
    )
}

export default CardEquipo