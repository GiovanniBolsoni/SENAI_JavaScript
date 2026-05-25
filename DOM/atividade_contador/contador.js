let number = document.getElementById("numero");
let button = document.getElementById("botao");
let contador = 0;

button.addEventListener("click", (evento) => {
    contador = contador + 1;
    number.innerText = "Contador de clicks: " + contador;
});