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
            <section className='section-lista-partidos'>
                <ListaTorneo listaTorneo={resultadosPartidos} categoria={"Primera masculino"}/>
                <ListaTorneo listaTorneo={resultadosPartidos2} categoria={"Primera femenino"}/>
            </section>
            <h2>Tablas de posiciones</h2>
            <section className='section-tablas'>
                <TablaPosiciones tablaPosiciones={tablaPosiciones} categoria={"Masculino"}/>
                <TablaPosiciones tablaPosiciones={tablaPosiciones} categoria={"Femenino"}/>
            </section>
        </main>
    )
}

export default Torneo