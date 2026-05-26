const textoCurtida = document.getElementById("texto");
const botaoCurtir = document.getElementById("botao");
const numeroCurtidas = document.getElementById("curtidas");
let contador = 0;

let curtido = false;

botaoCurtir.addEventListener("click", () => {
    if(curtido === false){
        textoCurtida.innerText = "Curtido ✅"
        curtido = true
        botaoCurtir.innerText = "Descurtir 💔"
        textoCurtida.style.color = "#00ff00"
        contador++;
        numeroCurtidas.innerText = "Curtidas: " + contador;
    } else {
        textoCurtida.innerText = "Não curtido ❌"
        curtido = false
        botaoCurtir.innerText = "Curtir ❤️"
        textoCurtida.style.color = "#ff0000"
        numeroCurtidas.innerText = "Curtidas: " + contador;
    }
});