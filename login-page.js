const button = document.querySelector(".button");
const show = document.querySelector(".fa-eye");
const hide = document.querySelector(".fa-eye-slash");
const pass = document.getElementById("password");


show.addEventListener("click", () => {

    show.classList.toggle("fa-eye-slash");
    if (pass.type == "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
})

pass.addEventListener("keypress", () => {
    if (pass.value.length > 1) {
        button.classList.add("button-active")
    }
    else {
        button.classList.remove("button-active")
    }


})

function validate() {
    const email = document.querySelector("#email");
    const pass = document.getElementById("password");

    if (email.value == "" && pass.value == "") {
        alert("Email or Password Field is empty!");
        return false;
    }
    else {
        true;
    }
}