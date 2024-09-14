import React from 'react'
import { listaSponsors } from '../../database/dbPruebas'
import { Link } from 'react-router-dom';
import './sponsor.css'

const ContainerSponsor = () => {
    return (
        <section className='section-sponsor'>
            <h2>Sponsors</h2>
            <div className='container-sponsor'>
                {
                    listaSponsors.map((sponsor) => (
                        <div className='sponsor'> <Link to={sponsor.instagram} target='_blank'><img src={sponsor.img} alt="logosponsor" /></Link></div>
                    ))
                }
            </div>
        </section>
    )
}

export default ContainerSponsor