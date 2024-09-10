import React from 'react'
import CardPartidos from '../../Components/Cards/CardPartidos'

const ListaTorneo = ({ listaTorneo, categoria }) => {
    return (
        <div className='container-partidos'>
            <h2>{categoria}</h2>
            {
                listaTorneo.map((p) => (
                    <CardPartidos key={p.id} partido={p} />
                ))
            }
        </div>
    )
}

export default ListaTorneo