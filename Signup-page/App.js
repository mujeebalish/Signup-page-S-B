 import { auth,createUserWithEmailAndPassword,sendEmailVerification } from "./firebase.js";
 let name = document.getElementById("name");
let email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");
let confirmPassword = document.getElementById("floatingcofirmPassword");
let registerBtn = document.getElementById("registerBtn");
// console.log(registerBtn);

registerBtn.addEventListener("click", (e) => {
 e.preventDefault();
 registerBtn. innerHTML = "Laoding.....";
 createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    registerBtn.innerText = "Loading ......"
    Toastify({
      text: `${"Successfully Registerd"}`,
      duration: 3000
    }).showToast();
    registerBtn.innerText = "Register"
    sendEmailVerification(auth.currentUser)
    .then(() => {
      Toastify({
        text: `${"Please verify your Email "}`,
        duration: 3000
      }).showToast();
    });
    email.value = "";
    password.value = "";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    registerBtn.innerText = "Register"

    Toastify({
      text: `${errorMessage}`,
      duration: 3000
    }).showToast();
    email.value = "";
    password.value = "";
  });
})















