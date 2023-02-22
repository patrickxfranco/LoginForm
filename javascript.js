//const html = document.documentElement
var a = document.getElementsByClassName("errorMessage")

function mostrarNome() { 
    alert(username.value)
}

if (username.value != "") {
    alert("User: " + username.value);
    alert("Password: " + password.value);
} else { 
    a.style.display =
        'display: inline';
}