const resultadosPartidos = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
        fecha: "2024-09-08",
        teamA: {
            id: 101,
            nombre: "Gimnasia",
            goles: 25,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Atl. y Tiro",
            goles: 29,
            img: "/img/logos/escudotiro.svg",
        }
    },
    {
        id: 2,
        numerodepartido: "Fecha 2",
        fecha: "2024-09-28",
        teamA: {
            id: 101,
            nombre: "Gimnasia",
            goles: 0,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Belgrano",
            goles: 0,
            img: "/img/logos/escudobelgrano.svg",
        },
    }
];


const resultadosPartidos2 = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
        fecha: "2024-09-07",
        teamA: {
            id: 101,
            nombre: "Gimnasia",
            goles: 14,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Adelante",
            goles: 35,
            img: "/img/logos/escudoadelante.svg",
        },
    },
    {
        id: 2,
        numerodepartido: "Fecha 2",
        fecha: "2024-09-28",
        teamA: {
            id: 101,
            nombre: "Pumas",
            goles: 0,
            img: "/img/logos/escudopumas.svg",
        },
        teamB: {
            id: 102,
            nombre: "Gimnasia",
            goles: 0,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    }
];

const tablaPosicionesFemenino = [
    {
        equipo: "Pumas",
        partidosJugados: 1,
        ganados: 1,
        perdidos: 0,
        empatados: 0,
        golesFavor: 120,
        golesContra: 90,
        diferenciaGoles: 58,
        puntos: 3,
        escudo: "/img/logos/escudopumas.svg"
    },
    {
        equipo: "Adelante",
        partidosJugados: 1,
        ganados: 1,
        perdidos: 0,
        empatados: 0,
        golesFavor: 35,
        golesContra: 14,
        diferenciaGoles: 21,
        puntos: 3,
        escudo: "/img/logos/escudoadelante.svg"
    },
    {
        equipo: "Gimnasia",
        partidosJugados: 1,
        ganados: 0,
        perdidos: 1,
        empatados: 0,
        golesFavor: 14,
        golesContra: 35,
        diferenciaGoles: -21,
        puntos: 1,
        escudo: "/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Atl. y Tiro",
        partidosJugados: 1,
        ganados: 0,
        perdidos: 1,
        empatados: 0,
        golesFavor: 100,
        golesContra: 105,
        diferenciaGoles: -58,
        puntos: 1,
        escudo: "/img/logos/escudotiro.svg"
    },
    {
        equipo: "Belgrano",
        partidosJugados: 0,
        ganados: 0,
        perdidos: 0,
        empatados: 0,
        golesFavor: 0,
        golesContra: 0,
        diferenciaGoles: 0,
        puntos: 0,
        escudo: "/img/logos/escudobelgrano.svg"
    }
]
const tablaPosicionesMasculino = [
    {
        equipo: "Pumas",
        partidosJugados: 1,
        ganados: 1,
        perdidos: 0,
        empatados: 0,
        golesFavor: 120,
        golesContra: 90,
        diferenciaGoles: 17,
        puntos: 3,
        escudo: "/img/logos/escudopumas.svg"
    },
    {
        equipo: "Atl. y Tiro",
        partidosJugados: 1,
        ganados: 1,
        perdidos: 0,
        empatados: 0,
        golesFavor: 29,
        golesContra: 25,
        diferenciaGoles: 4,
        puntos: 3,
        escudo: "/img/logos/escudotiro.svg"
    },
    {
        equipo: "Gimnasia",
        partidosJugados: 1,
        ganados: 0,
        perdidos: 1,
        empatados: 0,
        golesFavor: 25,
        golesContra: 29,
        diferenciaGoles: -4,
        puntos: 1,
        escudo: "/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Belgrano",
        partidosJugados: 1,
        ganados: 0,
        perdidos: 1,
        empatados: 0,
        golesFavor: 0,
        golesContra: 0,
        diferenciaGoles: -17,
        puntos: 1,
        escudo: "/img/logos/escudobelgrano.svg"
    },
    {
        equipo: "Adelante",
        partidosJugados: 0,
        ganados: 0,
        perdidos: 0,
        empatados: 0,
        golesFavor: 0,
        golesContra: 0,
        diferenciaGoles: 0,
        puntos: 0,
        escudo: "/img/logos/escudoadelante.svg"
    }
]
const listaSponsors = [
    {
        img: "/img/logos/logoapolo.svg"
    },
    {
        img: "/img/logos/logosublimarte.svg"
    }
]

const partidosPendientesMasc = [
    {
        id: 1,
        numerodepartido: "Fecha 2",
        fecha: "2024-09-28",
        teamA: {
            id: 101,
            nombre: "Gimnasia",
            goles: 0,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Belgrano",
            goles: 0,
            img: "/img/logos/escudobelgrano.svg",
        },
    }
]
const partidosPendientesFem = [
    {
        id: 1,
        numerodepartido: "Fecha 2",
        fecha: "2024-09-28",
        teamA: {
            id: 101,
            nombre: "Pumas",
            goles: 0,
            img: "/img/logos/escudopumas.svg",
        },
        teamB: {
            id: 102,
            nombre: "Gimnasia",
            goles: 0,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    }
]

const categorias = [
    {
        id: 1,
        nombre: "Primera",
        cat: "Masculino",
        horario1: "Lunes: 21:30hs - Colegio San Jose",
        horario2: "Martes: 21:30hs - Playon Barrio Lancero",
        horario3: "Miercoles: 20hs - Colegio San Jose",
        horario4: "Jueves: 20hs - Playon Barrio Lancero",
        img: "/img/logos/categoriamasculino.svg"
    },
    {
        id: 2,
        nombre: "Primera",
        cat: "Femenino",
        horario1: "Lunes: 20hs - Colegio San Jose",
        horario2: "Martes: 20hs - Playon Barrio Lancero",
        horario3: "Miercoles: 21:30hs - Colegio San Jose",
        horario4: "Jueves: 21:30hs - Playon Barrio Lancero",
        img: "/img/logos/categoriafemenino.svg"
    },
]
export { resultadosPartidos, resultadosPartidos2, tablaPosicionesFemenino, tablaPosicionesMasculino, listaSponsors, partidosPendientesMasc, partidosPendientesFem, categorias };