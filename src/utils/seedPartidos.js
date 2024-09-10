import { addDoc, collection } from "firebase/firestore"
import database from "../database/database.js"

const torneo1 = [
    {
        id: 1,
        numerodepartido: "Fecha 1",
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
        numerodepartido: "Fecha 4",
        teamA: {
            id: 102,
            nombre: "Equipo B",
            goles: 19,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
        teamB: {
            id: 104,
            nombre: "Equipo D",
            goles: 22,
            img: "../../public/img/logos/EscudoGimnasiaHandballReconquista.svg",
        },
    },
];

const seedPartidos = () => {
    torneo1.map(({id, ...rest}) => {
        const partidosRef = collection(database, "torneo1");
        addDoc(partidosRef, rest);
    });

    console.log("partidos subidos correctamente");
}

seedPartidos();