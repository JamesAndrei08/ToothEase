const container = document.getElementById('container');
const registerbtn = document.getElementById('register');
const loginbtn = document.getElementById('login');
const patient = document.getElementById('patientbtn');
const staffbtn = document.getElementById('staffbtn');

let patientHover = true;
let staffHover = false;

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
