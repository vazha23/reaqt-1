const Password = document.getElementById("Password");
const ConfrimPassword = document.getElementById("ConfrimPassword");

function validPassword() {
    if (!Password.value.trim() || !ConfrimPassword.value.trim()) {
        ConfrimPassword.setCustomValidity("გთხოვთ, შეავსეთ ველები");
    } else if (Password.value !== ConfrimPassword.value) {
        ConfrimPassword.setCustomValidity("პაროლი არასწორია");
    } else {
        ConfrimPassword.setCustomValidity("");
    }
}

Password.onchange = validPassword;
ConfrimPassword.onkeyup = validPassword;

document.querySelector(".button").onclick = function () {
    const Name = document.getElementById("Name").value;
    const lastName = document.getElementById("lasName").value;
    const Age = document.getElementById("Age").value;
    const Email = document.getElementById("email").value;
    const password = Password.value;
    const confirmPassword = ConfrimPassword.value;

    if (
        !Name.trim() ||
        !lastName.trim() ||
        !Age.trim() ||
        !Email.trim() ||
        !password.trim() ||
        !confirmPassword.trim()
    ) {
        alert("გთხოვთ, შეავსეთ ყველა ველი");
    } else {
        console.log(Name, lastName, Age, Email, password, confirmPassword);
    }
};
