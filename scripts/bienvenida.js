if (!localStorage.getItem("user-name"))
    window.location.href = "/";

window.addEventListener("load", function() {
    const name = localStorage.getItem("user-name");

    const btnLogout = document.querySelector("#logout-btn");
    const titulo = document.querySelector('h1');

    titulo.textContent = `Bienvenido al sitio ${name} ☺`;

    btnLogout.addEventListener("click", function() {
        localStorage.clear();
        alert("Se ha cerrado la sesión.");
        window.location.href = "/";
    })
})