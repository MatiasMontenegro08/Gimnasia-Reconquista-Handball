import React from 'react'
import { resultadosPartidos, resultadosPartidos2, partidosPendientesFem, partidosPendientesMasc } from '../../database/dbPruebas.js';
import { tablaPosicionesMasculino, tablaPosicionesFemenino } from '../../database/dbPruebas.js';
import PartidosCarrucel from '../../Components/Carrusel/PartidosCarrucel'
import TablaPosicionesTorneo from '../../Components/TablaPosiciones/TablaPosicionesTorneo.jsx';
import ContainerSponsor from '../../Components/Sponsor/ContainerSponsor'
import './home.css'
const Home = () => {
    return (
        <main className='main-home'>
            <h1>Gimnasia Handball Reconquista</h1>
            <section className='section-carruseles'>
                <PartidosCarrucel partidoMasculino={resultadosPartidos} partidoFemenino={resultadosPartidos2} titulo={"Últimos partidos"} />
                <PartidosCarrucel partidoMasculino={partidosPendientesMasc} partidoFemenino={partidosPendientesFem} titulo={"Siguiente fecha"} />
            </section>
            <TablaPosicionesTorneo equipos={tablaPosicionesMasculino} categoria={"Masculino"} />
            <TablaPosicionesTorneo equipos={tablaPosicionesFemenino} categoria={"Femenino"} />
            <ContainerSponsor />
        </main>
    )
}

export default Home