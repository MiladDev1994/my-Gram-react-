import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB16poHSTN5p71ImHbo7nWt-hL5FKUkr1o",
    authDomain: "testgram-24f4c.firebaseapp.com",
    projectId: "testgram-24f4c",
    storageBucket: "testgram-24f4c.appspot.com",
    messagingSenderId: "571350570229",
    appId: "1:571350570229:web:be31dc7f8102bda398a1bc"
}).auth();


