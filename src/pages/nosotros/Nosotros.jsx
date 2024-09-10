import React from 'react'
import imgNosotros from '../../../public/img/torneos/nosotros.png'
import './nosotros.css'

const Nosotros = () => {
    return (
        <main className='main-nosotros'>
            <h1>Gimnasia Reconquista</h1>
            <div className="historia">
                <p>¡Gracias por visitar nuestra página! Somos el equipo de handball "Gimnasia Reconquista", un grupo de apasionados por este deporte que se unieron para crear algo especial en nuestra ciudad. Nuestro equipo se fundó en el año 2023. Somos un grupo de amigos que solíamos jugar handball en un antiguo club. Decidimos dar un paso adelante y formar nuestro propio equipo, naciendo así Gimnasia Reconquista. En nuestro primer año de competición, logramos un destacado segundo puesto en la liga local, un reflejo del esfuerzo y la dedicación de cada uno de nuestros miembros.</p>
                <h2>Misión y Visión</h2>
                <h3>Misión</h3>
                <p>Crecer como equipo en la liga local, mejorando continuamente nuestro nivel de juego y cohesión grupal.</p>
                <h3>Visión</h3>
                <p>Queremos fomentar el crecimiento del handball en nuestra ciudad, inspirando a más personas a unirse y practicar este emocionante deporte.</p>
            </div>
            <div className="nosotros-img">
                <img src={imgNosotros} alt="" />
            </div>
        </main>
    )
}

export default Nosotros