import React from 'react'
import './tablaposiciones.css'

const TablaPosicionesTorneo = ({equipos, categoria}) => {
    return (
        <div className="tabla-container-torneo">
            <h2>Tabla de Posiciones</h2>
            <h3>{categoria}</h3>
            <table className="tabla-posiciones-torneo">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Equipo</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>DIFF</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {equipos.map((equipo, index) => (
                        <tr key={equipo.id}>
                            <td>{index + 1}º</td>
                            <td>
                                <img src={equipo.escudo} alt="icono" className="icono-equipo" /> {equipo.equipo}
                            </td>
                            <td>{equipo.partidosJugados}</td>
                            <td>{equipo.ganados}</td>
                            <td>{equipo.empatados}</td>
                            <td>{equipo.perdidos}</td>
                            <td>{equipo.diferenciaGoles > 0 ? `+${equipo.diferenciaGoles}` : equipo.diferenciaGoles}</td>
                            <td>{equipo.puntos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaPosicionesTorneo