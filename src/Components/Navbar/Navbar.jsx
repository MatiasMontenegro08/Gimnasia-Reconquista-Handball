import React from 'react'
import logoGimnasia from '../../../public/img/logos/EscudoGimnasiaHandballReconquista.svg';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logoGimnasia} width={50} alt="Escudo Gimnasia Handball" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categorias" className="nav-link">Categorías</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/torneos" className="nav-link">Torneos</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/galeria" className="nav-link">Galería</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/nosotros" className="nav-link">Nosotros</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar