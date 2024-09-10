import { addDoc, collection } from "firebase/firestore"
import database from "../database/database.js"

// Función para crear la estructura de un torneo
async function crearTorneoEstructura(torneoData, equiposData, partidosData, posicionesData) {
    try {
        // Paso 1: Crear el documento del torneo
        const torneoRef = await addDoc(collection(database, "torneos"), torneoData);

        // Paso 2: Crear los equipos dentro de la subcolección 'equipos' del torneo
        const equiposPromises = equiposData.map(async (equipo) => {
            const equipoRef = await addDoc(collection(torneoRef, "equipos"), equipo);

            // Paso 3: Crear jugadores para cada equipo en la subcolección 'jugadores'
            const jugadoresPromises = equipo.jugadores.map(async (jugador) => {
                await addDoc(collection(equipoRef, "jugadores"), jugador);
            });

            await Promise.all(jugadoresPromises);
        });

        await Promise.all(equiposPromises);

        // Paso 4: Crear los partidos dentro de la subcolección 'partidos' del torneo
        const partidosPromises = partidosData.map(async (partido) => {
            await addDoc(collection(torneoRef, "partidos"), partido);
        });

        await Promise.all(partidosPromises);

        // Paso 5: Crear la subcolección 'posiciones' para registrar el puntaje de los equipos
        const posicionesPromises = posicionesData.map(async (posicion) => {
            await addDoc(collection(torneoRef, "posiciones"), posicion);
        });

        await Promise.all(posicionesPromises);

        console.log("Torneo y estructura creada con éxito");
    } catch (error) {
        console.error("Error creando la estructura del torneo: ", error);
    }
}

// Datos de ejemplo
const torneoData = {
    nombre: "Torneo Local",
    año: 2024,
    estado: "en curso"
};

const equiposData = [
    {
        nombre: "Gimnasia Handatabaseall",
        entrenador: "Carlos Pérez",
        jugadores: [
            { nombre: "Juan Pérez", posición: "Portero", edad: 25 },
            { nombre: "Pedro López", posición: "Lateral", edad: 22 }
        ]
    },
    {
        nombre: "Handatabaseall Club",
        entrenador: "Luis García",
        jugadores: [
            { nombre: "Carlos Díaz", posición: "Central", edad: 28 },
            { nombre: "Jorge Martínez", posición: "Extremo", edad: 26 }
        ]
    }
];

const partidosData = [
    { equipoLocal: "Gimnasia Handatabaseall", equipoVisitante: "Handatabaseall Club", fecha: "2024-09-01", resultado: { golesLocal: 22, golesVisitante: 20 }, estado: "jugado" }
];

const posicionesData = [
    { equipoID: "Gimnasia Handatabaseall", partidosJugados: 10, partidosGanados: 7, partidosPerdidos: 2, puntos: 22 },
    { equipoID: "Handatabaseall Club", partidosJugados: 10, partidosGanados: 6, partidosPerdidos: 3, puntos: 20 }
];

// Llamar a la función para crear el torneo
crearTorneoEstructura(torneoData, equiposData, partidosData, posicionesData);
