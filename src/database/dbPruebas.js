const resultadosPartidos = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
        fecha: "2024-08-01",  // 1 de agosto de 2024
        teamA: {
            id: 101,
            nombre: "Equipo A",
            goles: 22,
            img: "/public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Equipo B",
            goles: 18,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
    {
        id: 2,
        numerodepartido: "Fecha 2",
        fecha: "2024-08-10",  // 10 de agosto de 2024
        teamA: {
            id: 103,
            nombre: "Equipo C",
            goles: 25,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 104,
            nombre: "Equipo D",
            goles: 20,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
    {
        id: 3,
        numerodepartido: "Fecha 3",
        fecha: "2024-08-15",  // 15 de agosto de 2024
        teamA: {
            id: 101,
            nombre: "Equipo A",
            goles: 21,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 103,
            nombre: "Equipo C",
            goles: 23,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
    {
        id: 4,
        numerodepartido: "Amistoso",
        fecha: "2024-08-31",  // 25 de agosto de 2024
        teamA: {
            id: 102,
            nombre: "Gimnasia",
            goles: 27,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 104,
            nombre: "Casla",
            goles: 27,
            img: "../../public/img/logos/escudocasla.svg",
        },
    },
];


const resultadosPartidos2 = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
        fecha: "2024-08-01",  // 1 de agosto de 2024
        teamA: {
            id: 101,
            nombre: "Equipo A",
            goles: 22,
            img: "/public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Equipo B",
            goles: 18,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
    {
        id: 2,
        numerodepartido: "Fecha 2",
        fecha: "2024-08-10",  // 10 de agosto de 2024
        teamA: {
            id: 103,
            nombre: "Equipo C",
            goles: 25,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 104,
            nombre: "Equipo D",
            goles: 20,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
    {
        id: 3,
        numerodepartido: "Fecha 3",
        fecha: "2024-08-15",  // 15 de agosto de 2024
        teamA: {
            id: 101,
            nombre: "Equipo A",
            goles: 21,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 103,
            nombre: "Equipo C",
            goles: 23,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
    {
        id: 4,
        numerodepartido: "Amistoso",
        fecha: "2024-08-31",  // 25 de agosto de 2024
        teamA: {
            id: 102,
            nombre: "Gimnasia",
            goles: 15,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 104,
            nombre: "Casla",
            goles: 20,
            img: "../../public/img/logos/escudocasla.svg",
        },
    },
];

const tablaPosiciones = [
    {
        equipo: "Equipo A",
        partidosJugados: 5,
        ganados: 4,
        perdidos: 1,
        empatados: 0,
        golesFavor: 120,
        golesContra: 90,
        diferenciaGoles: 30,
        puntos: 12,
        escudo: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Equipo B",
        partidosJugados: 5,
        ganados: 3,
        perdidos: 1,
        empatados: 1,
        golesFavor: 110,
        golesContra: 95,
        diferenciaGoles: 15,
        puntos: 10,
        escudo: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Equipo C",
        partidosJugados: 5,
        ganados: 3,
        perdidos: 2,
        empatados: 0,
        golesFavor: 105,
        golesContra: 100,
        diferenciaGoles: 5,
        puntos: 9,
        escudo: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Equipo D",
        partidosJugados: 5,
        ganados: 2,
        perdidos: 2,
        empatados: 1,
        golesFavor: 100,
        golesContra: 105,
        diferenciaGoles: -5,
        puntos: 7,
        escudo: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Equipo E",
        partidosJugados: 5,
        ganados: 1,
        perdidos: 4,
        empatados: 0,
        golesFavor: 90,
        golesContra: 115,
        diferenciaGoles: -25,
        puntos: 3,
        escudo: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg"
    },
    {
        equipo: "Equipo F",
        partidosJugados: 5,
        ganados: 0,
        perdidos: 3,
        empatados: 2,
        golesFavor: 85,
        golesContra: 115,
        diferenciaGoles: -30,
        puntos: 2,
        escudo: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg"
    }
]

const listaSponsors = [
    {
        img: "../../public/img/logos/logoapolo.svg"
    },
    {
        img: "../../public/img/logos/logointercel.svg"
    },
    {
        img: "../../public/img/logos/logoapolo.svg"
    },
    {
        img: "../../public/img/logos/logoapolo.svg"
    }
]

const partidosPendientesMasc = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
        fecha: "2024-09-08T14:00:00Z",  // 1 de agosto de 2024
        teamA: {
            id: 101,
            nombre: "Gimnasia",
            goles: 0,
            img: "/public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 102,
            nombre: "Atletico y Tiro",
            goles: 0,
            img: "../../public/img/logos/escudotiro.svg",
        },
    }
]
const partidosPendientesFem = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
        fecha: "2024-09-08T14:00:00Z",  // 1 de agosto de 2024
        teamA: {
            id: 101,
            nombre: "Adelante",
            goles: 0,
            img: "/public/img/logos/escudoadelante.svg",
        },
        teamB: {
            id: 102,
            nombre: "Gimnasia",
            goles: 0,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
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
export { resultadosPartidos, resultadosPartidos2, tablaPosiciones, listaSponsors, partidosPendientesMasc, partidosPendientesFem, categorias };