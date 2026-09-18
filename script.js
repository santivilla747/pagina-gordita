const sobre = document.querySelector(".sobre");
const carta = document.querySelector(".carta");
const tituloCarta = document.querySelector(".titulo-carta");
const cerrarCarta = document.querySelector(".cerrar-carta");

sobre.addEventListener("click", function () {

    // Activa la animación del sobre
    sobre.classList.add("abriendo");

    // Espera 0,5 segundos antes de mostrar la carta
    setTimeout(function () {

        sobre.style.display = "none";
        tituloCarta.style.display = "none";
        carta.style.display = "block";

        // Crea los brillitos
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

    carta.style.display = "none";
    tituloCarta.style.display = "block";
    sobre.style.display = "block";

    // Prepara el sobre para poder animarlo nuevamente
    sobre.classList.remove("abriendo");
});