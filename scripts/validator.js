// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
    usuarios: [{
            id: 1,
            name: "Steve Jobs",
            email: "steve@jobs.com",
            password: "Steve123",
        },
        {
            id: 2,
            name: "Ervin Howell",
            email: "shanna@melissa.tv",
            password: "Ervin345",
        },
        {
            id: 3,
            name: "Clementine Bauch",
            email: "nathan@yesenia.net",
            password: "Floppy39876",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            email: "julianne.oconner@kory.org",
            password: "MysuperPassword345",
        },
    ],
};

if (localStorage.getItem("user-name"))
    window.location.href = "/bienvenida.html";

window.onload = () => {
    const REGEXS = [/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/];

    const correo = document.getElementById("email-input");
    const pass = document.getElementById("password-input");
    const loader = document.getElementById('loader');
    const error = document.getElementById('error-container');
    const boton = document.querySelector('.login-btn');

    boton.onclick = e => {
        e.preventDefault();
        loader.classList.remove('hidden');

        validarCampos();

        setTimeout(() => {
            loader.classList.add('hidden');
            const user = buscarUsuario();

            if (user) {
                window.location.href = "bienvenida.html";
                localStorage.setItem("user-name", user.name);
                localStorage.setItem("user-email", user.email);
            } else {
                error.innerHTML = `<small>Alguno de los datos ingresados son incorrectos</small>`;
            }

            if (error.innerHTML.length !== 0) {
                error.classList.remove('hidden');
            }


        }, 2000);


    }

    function validarCampos() {
        error.classList.add('hidden');
        error.innerHTML = '';

        let emailRegex = REGEXS[0];
        if (!emailRegex.test(correo.value)) {
            error.innerHTML = `<small>El correo ingresado es invalido.</small>`;
        }

        if (pass.value.length < 5) {
            error.innerHTML = `<small>La contraseña ingresada es muy corta.</small>`;
        }
    }

    function buscarUsuario() {
        const user = baseDeDatos.usuarios.find(
            user => user.email == correo.value && user.password == pass.value);

        if (!user) {
            error.innerHTML = `<small>El usuario ingresado no existe.</small>`;
        }

        return user;

    }

}