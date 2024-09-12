import React from 'react'
import { categorias } from '../../database/dbPruebas'
import CardCategoria from './CardCategoria'
import './categoria.css'
import PlayonesEntrenamiento from './PlayonesEntrenamiento'

const Categoria = () => {
    return (
        <main className='main-container'>
            <h1>Categorías</h1>
            <section className='section-categorias'>
                {
                    categorias.map((categoria) => (
                        <CardCategoria categoria={categoria} />
                    ))
                }
            </section>
            <section className='section-direcciones'>
                <h2>Lugares de entrenamiento</h2>
                <PlayonesEntrenamiento />
            </section>
        </main>
    )
}

export default Categoria