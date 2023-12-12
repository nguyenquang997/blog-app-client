// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-fgigrp7BSf03nAsn2x_fYMmca0oWn5o",
    authDomain: "note-app-react-c65f7.firebaseapp.com",
    projectId: "note-app-react-c65f7",
    storageBucket: "note-app-react-c65f7.appspot.com",
    messagingSenderId: "488078534876",
    appId: "1:488078534876:web:f6117935fd9a0d74caec19",
    measurementId: "G-0STX469PTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);