

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDmRcaCmxogM0lxMKfayi3id_urOklKVdw",
    authDomain: "login-page-8769d.firebaseapp.com",
    projectId: "login-page-8769d",
    storageBucket: "login-page-8769d.firebasestorage.app",
    messagingSenderId: "323503777957",
    appId: "1:323503777957:web:90aa51e98d89d2b58c854c",
    measurementId: "G-BDJ5L9WFQK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export {auth,createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged}