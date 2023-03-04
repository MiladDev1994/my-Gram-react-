import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from "../firebase";


const Login = () => {
    return (
        <button
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >Login</button>
    );
};

export default Login;