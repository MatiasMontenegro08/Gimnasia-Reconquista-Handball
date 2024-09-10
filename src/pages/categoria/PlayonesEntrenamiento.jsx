import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from "react-icons/fa";

const PlayonesEntrenamiento = () => {
    return (
        <div className='container-direcciones'>
            <div className="direccion">
                <Link to="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d435.5946347593574!2d-59.64601733851593!3d-29.142354712965226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1725629101701!5m2!1ses!2sar" target='blank_' ><FaMapMarkerAlt size={40} /></Link>
                <p>Colegio San Jose: esquina Belgrano y Alvear</p>
            </div>
            <div className="direccion">
                <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11719.522292265532!2d-59.67193811458336!3d-29.157751669292374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944eb101cde42485%3A0xb26e2c9e8c772635!2sPlay%C3%B3n%20CIC%20BARRIO%20LANCEROS!5e0!3m2!1ses!2sar!4v1725629012746!5m2!1ses!2sar" target='blank_' ><FaMapMarkerAlt size={40} /></Link>
                <p>Playon barrio Lanceros: Pasaje 48-50 2023</p>
            </div>
        </div>
    )
}

export default PlayonesEntrenamiento