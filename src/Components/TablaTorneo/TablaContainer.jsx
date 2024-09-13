import React from 'react'
import TablaPosiciones from './TablaPosiciones'
import { tablaPosicionesMasculino, tablaPosicionesFemenino } from '../../database/dbPruebas.js';
import './tablatorneo.css'

const TablaContainer = () => {
    return (
        <section className='section-posiciones'>
            <h2>Tabla de la liga</h2>
            <div className='container-tablaposiciones'>
                <TablaPosiciones tablaPosiciones={tablaPosicionesMasculino} categoria={"Masculino"}/>
                <TablaPosiciones tablaPosiciones={tablaPosicionesFemenino} categoria={"Femenino"}/>
            </div>
        </section>
    )
}

export default TablaContainer