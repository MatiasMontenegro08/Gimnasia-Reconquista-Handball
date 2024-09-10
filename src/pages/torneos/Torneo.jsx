import React from 'react'
import ListaTorneo from './ListaTorneo'
import { resultadosPartidos, resultadosPartidos2 } from '../../database/dbPruebas.js'
import { tablaPosiciones } from '../../database/dbPruebas.js';
import './torneo.css'
import TablaPosiciones from '../../Components/TablaTorneo/TablaPosiciones.jsx';

const Torneo = () => {
    return (
        <main className='main-torneo'>
            <h1>Torneos</h1>
            <ListaTorneo listaTorneo={resultadosPartidos} categoria={"Primera masculino"}/>
            <ListaTorneo listaTorneo={resultadosPartidos2} categoria={"Primera femenino"}/>
            <h2>Tablas de posiciones</h2>
            <TablaPosiciones tablaPosiciones={tablaPosiciones} categoria={"Masculino"}/>
            <TablaPosiciones tablaPosiciones={tablaPosiciones} categoria={"Femenino"}/>
        </main>
    )
}

export default Torneo