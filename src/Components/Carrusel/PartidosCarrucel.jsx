import React from 'react'
import ListaPartidos from './ListaPartidos';
import Carousel from 'react-bootstrap/Carousel';
import './carrusel.css';

const PartidosCarrucel = ({partidoMasculino, partidoFemenino, titulo}) => {

    return (
        <div className='section-ultimos-partidos'>
            <h2>{titulo}</h2>
                <Carousel >
                    <Carousel.Item>
                        <ListaPartidos listaTorneo={partidoMasculino} categoria={"Primera Masculino"} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ListaPartidos listaTorneo={partidoFemenino} categoria={"Primera femenino"} />
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default PartidosCarrucel