import React from 'react'
import ListaTorneo from './ListaTorneo'
import { resultadosPartidos, resultadosPartidos2 } from '../../database/dbPruebas.js'
import { tablaPosicionesMasculino, tablaPosicionesFemenino } from '../../database/dbPruebas.js';
import TablaPosicionesTorneo from '../../Components/TablaPosiciones/TablaPosicionesTorneo.jsx';
import './torneo.css'

const Torneo = () => {
    return (
        <main className='main-torneo'>
            <h1>Torneos</h1>
            <section className='section-lista-partidos'>
                <ListaTorneo listaTorneo={resultadosPartidos} categoria={"Primera masculino"} />
                <ListaTorneo listaTorneo={resultadosPartidos2} categoria={"Primera femenino"} />
            </section>
            <h2>Tablas de posiciones</h2>
            <section className='section-tablas'>
                <TablaPosicionesTorneo equipos={tablaPosicionesMasculino} categoria={"Masculino"} />
                <TablaPosicionesTorneo equipos={tablaPosicionesFemenino} categoria={"Femenino"} />
            </section>
        </main>
    )
}

export default Torneo