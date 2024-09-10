import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPyQheatCurtlVSXsvoX1hqFpF3oRZ_XY",
    authDomain: "gimnasia-handball-reconquista.firebaseapp.com",
    projectId: "gimnasia-handball-reconquista",
    storageBucket: "gimnasia-handball-reconquista.appspot.com",
    messagingSenderId: "728130555404",
    appId: "1:728130555404:web:fad1b6415aa0d3bc1e2829"
};


initializeApp(firebaseConfig);

const database = getFirestore()

export default database;