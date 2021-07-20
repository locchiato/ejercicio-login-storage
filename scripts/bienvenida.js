if (!localStorage.getItem("usuario"))
    window.location.href = "/";

window.addEventListener("load", function() {
    const user = JSON.parse(localStorage.getItem("usuario"));

    const btnLogout = document.querySelector("#logout-btn");
    const titulo = document.querySelector('h1');

    titulo.textContent = `Bienvenido al sitio ${user.name} `;

    btnLogout.addEventListener("click", function() {
        localStorage.removeItem("usuario");
        alert("Se ha cerrado la sesión.");
        window.location.href = "/";
    })
})