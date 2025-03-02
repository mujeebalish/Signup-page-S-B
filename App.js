 import { auth,createUserWithEmailAndPassword } from "./firebase.js";
 let name = document.getElementById("name");
let email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");
let confirmPassword = document.getElementById("floatingcofirmPassword");
let registerBtn = document.getElementById("registerBtn");
// console.log(registerBtn);

registerBtn.addEventListener("click", (e) => {
 e.preventDefault();
 createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {

    const user = userCredential.user;
    Toastify({

        text: `${"Successfully Registerd"}`,

        duration: 3000

        }).showToast();



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({

        text: `${errorMessage}`,

        duration: 3000

        }).showToast();



  });


})
