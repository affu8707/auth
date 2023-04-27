import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAHBwLSRY2tLeh53Z0PLdmkQEPTpmp0Wxw",
    authDomain: "auth-check-ebcf6.firebaseapp.com",
    projectId: "auth-check-ebcf6",
    storageBucket: "auth-check-ebcf6.appspot.com",
    messagingSenderId: "487263559263",
    appId: "1:487263559263:web:315f0eee4803e46c77c5ea"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);