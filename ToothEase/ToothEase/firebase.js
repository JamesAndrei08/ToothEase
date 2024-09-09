// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

document.addEventListener("DOMContentLoaded", function() {

    const passwordHide = document.getElementById("passwordHide");
    const passwordField = document.getElementById("password");

    passwordHide.addEventListener("click", function() {

        if (passwordHide.classList.contains("bxs-hide")) {
            passwordHide.classList.remove("bxs-hide");
            passwordHide.classList.add("bxs-show");
            passwordField.type = 'text';
        } else {
            passwordHide.classList.remove("bxs-show");
            passwordHide.classList.add("bxs-hide");
            passwordField.type = 'password';
        }
    });

});

const firebaseConfig = {
  apiKey: "AIzaSyAP3lx6eDoPrzKUSi-PjHxBAPRPXqUqmYk",
  authDomain: "aguilar-james.firebaseapp.com",
  projectId: "aguilar-james",
  storageBucket: "aguilar-james.appspot.com",
  messagingSenderId: "1080262860034",
  appId: "1:1080262860034:web:902d617b7ef219d93fb61b",
  measurementId: "G-9DYCV5S8KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById('container');
const registerbtn = document.getElementById('register');
const loginbtn = document.getElementById('login');
const patient = document.getElementById('patientbtn');
const staffbtn = document.getElementById('staffbtn');

let patientHover = true;
let staffHover = false;

registerbtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
    container.classList.remove("active");
});

patient.addEventListener("click", ()=> {
    patient.style.backgroundColor = "#0578a5";
    patient.style.color = "white";
    patient.style.borderColor = "white";
    staffbtn.style.backgroundColor = "white";
    staffbtn.style.color = "black";
    staffbtn.style.border = "1px solid black";
});

staffbtn.addEventListener("click", ()=> {
    staffbtn.style.backgroundColor = "#0578a5";
    staffbtn.style.color = "white";
    staffbtn.style.borderColor = "white";
    patient.style.backgroundColor = "white";
    patient.style.color = "black";
    patient.style.borderColor = "black";

});
