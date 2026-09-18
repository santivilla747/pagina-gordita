const sobre = document.querySelector(".sobre");
const carta = document.querySelector(".carta");
const tituloCarta = document.querySelector(".titulo-carta");
const cerrarCarta = document.querySelector(".cerrar-carta");

sobre.addEventListener("click", function () {

    // Activa la animación del sobre
    sobre.classList.add("abriendo");

    // Espera a que termine la animación del sobre
    setTimeout(function () {
        sobre.style.display = "none";
        tituloCarta.style.display = "none";
        
        // 1. Mostramos la caja de la carta (pero sigue invisible por la opacidad 0)
        carta.style.display = "block";
        
        // 2. Truco infalible: Obligamos al navegador a procesar el cambio
        carta.offsetHeight; 
        
        // 3. Le agregamos la clase que hace la magia de aparecer suavemente
        carta.classList.add("mostrar");

        // Crea los brillitos (tu código)
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

        // Baja la pantalla hacia la carta
        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 500);
});

cerrarCarta.addEventListener("click", function () {

    // 1. Le sacamos la clase para que se vuelva transparente suavemente
    carta.classList.remove("mostrar");

    // 2. Esperamos 800ms (lo que dura la transición) y la ocultamos del todo
    setTimeout(function () {
        carta.style.display = "none";
        tituloCarta.style.display = "block";
        sobre.style.display = "block";
        sobre.classList.remove("abriendo");
    }, 800); 
});
