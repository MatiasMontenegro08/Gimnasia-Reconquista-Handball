import { createContext, useState } from "react";
import database from '../database/database.js';
import { getDoc, collection, query, where } from "firebase/firestore";

//creamos contexto
const TorneoContext = createContext();

//Proveedor del contexto
const TorneoProvider = ({ children }) => {

    //Array con todos los partidos del torneo
    const [listaTorneo, setListaTorneo] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false);

    const getPartidos = async () => {
        try {
            setEstaCargando(true);
            const partidosRef = collection(database, "torneo1");
            const dataDb = await getDocs(partidosRef);
            const data = dataDb.docs.map((partidoDb) => {
                return { id: partidoDb.id, ...partidoDb.data() }
            });

            setListaTorneo(data);
        } catch (error) {
            console.log(error)
        } finally {
            setEstaCargando(false);
        }

    }

    const getPartidosByCategory = async () => {
        try {
            setEstaCargando(true);
            const partidosRef = collection(database, "torneo1");
            const consulta = query(partidosRef, where("categoria", '==', idCategoria));
            const dataDb = await getDocs(consulta);

            const data = dataDb.docs.map((partidoDb) => {
                return { id: partidoDb.id, ...partidoDb.data() }
            });

            setListaTorneo(data);
        } catch (error) {
            console.log(error)
        } finally {
            setEstaCargando(false);
        }
    }

        useEffect(() => {
            if (idCategoria) {
                getPartidosByCategory()
            } else {
                getPartidos();
            }
        }, [idCategoria]);

    return (
        <TorneoContext.Provider value={{ listaTorneo, estaCargando, setListaTorneo, obtenerDatosTorneo }}>
            {children}
        </TorneoContext.Provider>
    )
}

export { TorneoContext, TorneoProvider };