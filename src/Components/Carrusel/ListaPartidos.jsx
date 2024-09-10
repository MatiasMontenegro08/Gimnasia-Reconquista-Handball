import React from 'react'
import Partido from './Partido'

const ListaPartidos = ({ listaTorneo, categoria }) => {

    const ultimoPartido = listaTorneo.reduce((ultimo, partidoActual) => {
        return new Date(partidoActual.fecha) > new Date(ultimo.fecha) ? partidoActual : ultimo;
    }, listaTorneo[0]);

    return (
        <div className='container-lista'>
            <h3>{categoria}</h3>
            {ultimoPartido && <Partido key={ultimoPartido.id} partido={ultimoPartido} />}
        </div>
    )
}
export default ListaPartidos