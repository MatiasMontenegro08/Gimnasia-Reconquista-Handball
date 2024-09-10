import React from 'react'
import TablaPosiciones from './TablaPosiciones'
import { tablaPosiciones } from '../../database/dbPruebas.js';
import './tablatorneo.css'

const TablaContainer = () => {
    return (
        <section className='section-posiciones'>
            <h2>Tabla de la liga</h2>
            <div className='container-tablaposiciones'>
                <TablaPosiciones tablaPosiciones={tablaPosiciones} categoria={"Masculino"}/>
                <TablaPosiciones tablaPosiciones={tablaPosiciones} categoria={"Femenino"}/>
            </div>
        </section>
    )
}

export default TablaContainer