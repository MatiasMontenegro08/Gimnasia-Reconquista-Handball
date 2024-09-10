import React from 'react'
import { resultadosPartidos, resultadosPartidos2, partidosPendientesFem, partidosPendientesMasc } from '../../database/dbPruebas.js';
import PartidosCarrucel from '../../Components/Carrusel/PartidosCarrucel'
import TablaContainer from '../../Components/TablaTorneo/TablaContainer'
import ContainerSponsor from '../../Components/Sponsor/ContainerSponsor'
import './home.css'
const Home = () => {
    return (
        <main className='main-home'>
            <h1>Gimnasia Handball Reconquista</h1>
            <PartidosCarrucel partidoMasculino={resultadosPartidos} partidoFemenino={resultadosPartidos2} titulo={"Últimos partidos"}/>
            <PartidosCarrucel partidoMasculino={partidosPendientesMasc} partidoFemenino={partidosPendientesFem} titulo={"Siguiente fecha"}/>
            <TablaContainer />
            <ContainerSponsor />
        </main>
    )
}

export default Home