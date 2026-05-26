let number = document.getElementById("numero");
let button = document.getElementById("botao");
let contador = 0;

button.addEventListener("click", () => {
    contador++;
    number.innerText = "Contador de clicks: " + contador;
});