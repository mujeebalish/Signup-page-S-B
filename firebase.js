
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
