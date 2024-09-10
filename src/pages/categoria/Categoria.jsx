import React from 'react'
import { categorias } from '../../database/dbPruebas'
import CardCategoria from './CardCategoria'
import './categoria.css'
import PlayonesEntrenamiento from './PlayonesEntrenamiento'

const Categoria = () => {
    return (
        <main className='main-container'>
            <h1>Categorías</h1>
            {
                categorias.map((categoria) => (
                    <CardCategoria categoria={categoria} />
                ))
            }
            <h2>Lugares de entrenamiento</h2>
            <PlayonesEntrenamiento />
        </main>
    )
}

export default Categoria