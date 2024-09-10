import React from 'react'


const CardCategoria = ({categoria}) => {
    return (
        <div className='card-container'>
            <h3>{categoria.nombre} {categoria.cat}</h3>
            <div className='card-img'>
                <img src={categoria.img} alt={categoria.nombre} />
            </div>
            <div className="card-body">
                <p>{categoria.horario1}</p>
                <p>{categoria.horario2}</p>
                <p>{categoria.horario3}</p>
                <p>{categoria.horario4}</p>
            </div>
        </div>
    )
}

export default CardCategoria