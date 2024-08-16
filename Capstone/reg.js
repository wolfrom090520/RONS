// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-SERVICE.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ7D1icBDT0MC-cMJI8_lR9RLUnXsW2Mg",
    authDomain: "employability-3b731.firebaseapp.com",
    projectId: "employability-3b731",
    storageBucket: "employability-3b731.appspot.com",
    messagingSenderId: "752307543783",
    appId: "1:752307543783:web:484394159d882866754c42",
    measurementId: "G-RYJ6SYLMGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    //input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Registration Successful");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });

})