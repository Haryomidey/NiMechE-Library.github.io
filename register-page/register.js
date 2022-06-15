
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