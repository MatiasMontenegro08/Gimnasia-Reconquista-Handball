const resultadosPartidos = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
        fecha: "Sep-08-2024",
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
        fecha: "Oct-05-2024",
        teamA: {
            id: 101,
            nombre: "Gimnasia",
            goles: 42,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Belgrano",
            goles: 23,
            img: "/img/logos/escudobelgrano.svg",
        },
    },
    {
        id: 3,
        numerodepartido: "Fecha 3",
        fecha: "Oct-11-2024",
        teamA: {
            id: 101,
            nombre: "Gimnasia",
            goles: 0,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Pumas",
            goles: 0,
            img: "/img/logos/escudopumas.svg",
        },
    },
    {
        id: 4,
        numerodepartido: "Fecha 4",
        fecha: "Oct-20-2024",
        teamA: {
            id: 101,
            nombre: "Adelante",
            goles: 0,
            img: "/img/logos/escudoadelante.svg",
        },
        teamB: {
            id: 102,
            nombre: "Gimnasia",
            goles: 0,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    }
];


const resultadosPartidos2 = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
        fecha: "Sep-07-2024",
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
        fecha: "Sep-22-2024",
        teamA: {
            id: 101,
            nombre: "Pumas",
            goles: 38,
            img: "/img/logos/escudopumas.svg",
        },
        teamB: {
            id: 102,
            nombre: "Gimnasia",
            goles: 13,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
    {
        id: 3,
        numerodepartido: "Fecha 3",
        fecha: "Sep-29-2024",
        teamA: {
            id: 101,
            nombre: "Atl. y Tiro",
            goles: 9,
            img: "/img/logos/escudotiro.svg",
        },
        teamB: {
            id: 102,
            nombre: "Gimnasia",
            goles: 25,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
    {
        id: 4,
        numerodepartido: "Fecha 4",
        fecha: "Oct-06-2024",
        teamA: {
            id: 105,
            nombre: "Gimnasia",
            goles: 17,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 106,
            nombre: "Belgrano",
            goles: 43,
            img: "/img/logos/escudobelgrano.svg",
        },
    }
];

const tablaPosicionesFemenino = [
    {
        equipo: "Pumas",
        partidosJugados: 3,
        ganados: 3,
        perdidos: 0,
        empatados: 0,
        golesFavor: 120,
        golesContra: 90,
        diferenciaGoles: 88,
        puntos: 9,
        escudo: "/img/logos/escudopumas.svg"
    },
    {
        equipo: "Gimnasia",
        partidosJugados: 4,
        ganados: 1,
        perdidos: 3,
        empatados: 0,
        golesFavor: 29,
        golesContra: 44,
        diferenciaGoles: -56,
        puntos: 6,
        escudo: "/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Atl. y Tiro",
        partidosJugados: 3,
        ganados: 1,
        perdidos: 2,
        empatados: 0,
        golesFavor: 100,
        golesContra: 105,
        diferenciaGoles: -59,
        puntos: 5,
        escudo: "/img/logos/escudotiro.svg"
    },
    {
        equipo: "Adelante",
        partidosJugados: 2,
        ganados: 1,
        perdidos: 1,
        empatados: 0,
        golesFavor: 35,
        golesContra: 14,
        diferenciaGoles: 16,
        puntos: 4,
        escudo: "/img/logos/escudoadelante.svg"
    },
    {
        equipo: "Belgrano",
        partidosJugados: 2,
        ganados: 1,
        perdidos: 1,
        empatados: 0,
        golesFavor: 0,
        golesContra: 0,
        diferenciaGoles: +11,
        puntos: 4,
        escudo: "/img/logos/escudobelgrano.svg"
    }
]
const tablaPosicionesMasculino = [
    {
        equipo: "Atl. y Tiro",
        partidosJugados: 3,
        ganados: 2,
        perdidos: 1,
        empatados: 0,
        golesFavor: 29,
        golesContra: 25,
        diferenciaGoles: -14,
        puntos: 7,
        escudo: "/img/logos/escudotiro.svg"
    },
    {
        equipo: "Adelante",
        partidosJugados: 2,
        ganados: 2,
        perdidos: 0,
        empatados: 0,
        golesFavor: 0,
        golesContra: 0,
        diferenciaGoles: 26,
        puntos: 6,
        escudo: "/img/logos/escudoadelante.svg"
    },
    {
        equipo: "Gimnasia",
        partidosJugados: 2,
        ganados: 1,
        perdidos: 1,
        empatados: 0,
        golesFavor: 25,
        golesContra: 29,
        diferenciaGoles: 15,
        puntos: 4,
        escudo: "/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Pumas",
        partidosJugados: 2,
        ganados: 1,
        perdidos: 1,
        empatados: 0,
        golesFavor: 120,
        golesContra: 90,
        diferenciaGoles: 10,
        puntos: 4,
        escudo: "/img/logos/escudopumas.svg"
    },
    {
        equipo: "Belgrano",
        partidosJugados: 3,
        ganados: 0,
        perdidos: 3,
        empatados: 0,
        golesFavor: 0,
        golesContra: 0,
        diferenciaGoles: -37,
        puntos: 3,
        escudo: "/img/logos/escudobelgrano.svg"
    }
]
const listaSponsors = [
    {
        img: "/img/logos/logoapolo.svg",
        instagram: "https://www.instagram.com/apolopiscinas/?hl=es-la"
    },
    {
        img: "/img/logos/logosublimarte.svg",
        instagram: "https://www.instagram.com/sublimarte.ms/?hl=es-la"
    }
]

const partidosPendientesMasc = [
    {
        id: 1,
        numerodepartido: "Fecha 3",
        fecha: "Oct-11-2024",
        teamA: {
            id: 101,
            nombre: "Gimnasia",
            goles: 0,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Pumas",
            goles: 0,
            img: "/img/logos/escudopumas.svg",
        },
    },
]
const partidosPendientesFem = [
    {
        id: 1,
        numerodepartido: "Fase grupo finalizado",
        fecha: "Oct-30-2024",
        teamA: {
            id: 105,
            nombre: "Gimnasia",
            goles: 0,
            img: "/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 106,
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