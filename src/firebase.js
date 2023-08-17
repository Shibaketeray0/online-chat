import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyC0-8Zq6VJADdeBWpF27yP2OYrV8mQq0fE",

    authDomain: "online-chat-84a71.firebaseapp.com",

    projectId: "online-chat-84a71",

    storageBucket: "online-chat-84a71.appspot.com",

    messagingSenderId: "308323421019",

    appId: "1:308323421019:web:ab28ffd180a78e5df6e87e",

    measurementId: "G-0TS81CWXJH"

};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}