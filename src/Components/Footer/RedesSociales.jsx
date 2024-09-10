import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { Link } from 'react-router-dom';


const RedesSociales = () => {
    return (
        <div className='redes'>
            <Link to="https://www.instagram.com/handball_gimnasia/?hl=es-la" target='_blank'><FaInstagram size={50} /></Link>
            <Link to="#" target='_blank'><ImWhatsapp size={50}/></Link>
        </div>
    )
}

export default RedesSociales