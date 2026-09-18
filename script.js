const sobre = document.querySelector(".sobre"); // ¡Corregido el const en minúscula!
const carta = document.querySelector(".carta");
const tituloCarta = document.querySelector(".titulo-carta");
const cerrarCarta = document.querySelector(".cerrar-carta");

sobre.addEventListener("click", function () {

    // Activa la animación del sobre
    sobre.classList.add("abriendo");

    // Espera 0.5 segundos antes de mostrar la carta
    setTimeout(function () {

        sobre.style.display = "none";
        tituloCarta.style.display = "none";
        
        // 1. Primero hacemos que la carta ocupe espacio en la pantalla
        carta.style.display = "block";

        // 2. Truco pro: un micro-retraso para que el CSS detecte el cambio y haga el fundido
        setTimeout(function () {
            carta.classList.add("mostrar");
        }, 10);

        // Crea los brillitos (¡Este código tuyo está perfecto!)
        for (let i = 0; i < 8; i++) {
            const brillo = document.createElement("span");
            brillo.textContent = "✨";
            brillo.classList.add("brillo");
            brillo.style.left = Math.random() * 90 + "%";
            brillo.style.top = Math.random() * 80 + "%";
            carta.appendChild(brillo);

            brillo.addEventListener("animationend", function () {
                brillo.remove();
            });
        }

        // Lleva suavemente la pantalla hacia la carta
        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 500);
});

cerrarCarta.addEventListener("click", function () {

    // 1. Le quitamos la clase para que haga el fundido hacia la transparencia
    carta.classList.remove("mostrar");

    // 2. Esperamos que termine el fundido (800ms) para ocultarla del todo
    setTimeout(function () {
        carta.style.display = "none";
        tituloCarta.style.display = "block";
        sobre.style.display = "block";
        sobre.classList.remove("abriendo");

        // Opcional: Volvemos a enfocar el sobre
        sobre.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 800); 
});
