 import {auth, signInWithEmailAndPassword, onAuthStateChanged} from "../firebase.js";
let email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");
let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        loginBtn.innerHTML = "Loading ......"
        Toastify({
            text: `${"Successfully Logedin "}`,
            duration: 3000
          }).showToast();
          loginBtn.innerHTML = "Login"
          window.location.href
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      loginBtn.innerHTML = "Loading ......"
      Toastify({
        text: `${errorMessage}`,
        duration: 3000
      }).showToast();
      loginBtn.innerHTML = "Login"
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
       window.location.href = "../Dashbord/dashbord.html"
      }

    });

});
