
const botao = document.getElementById("botaoTema");
const corpoPagina = document.body;
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

let modoEscuroAtivado = false;

botao.addEventListener("click", () => {
    if(modoEscuroAtivado === true) {
        corpoPagina.style.backgroundColor = "#ffffff";
        corpoPagina.style.color = "#000000";

        caixa.style.backgroundColor = "#f4f4f4";
        caixa.style.color = "#cccccc";

        botao.style.backgroundColor = "#000000";
        botao.style.color = "#ffffff";
        botao.style.border = "none";

        titulo.style.color = "#222222";
        texto.style.color = "#333333";

        botao.innerText = "Ativar modo escuro"

        modoEscuroAtivado = false;
    } else {
        corpoPagina.style.backgroundColor = "#1e1e1e";
        corpoPagina.style.color = "#ffffff";

        caixa.style.backgroundColor = "#333333";

        botao.style.backgroundColor = "#ffffff";
        botao.style.color = "#000000";
        botao.style.border = "none";

        titulo.style.color = "#ffffff";
        texto.style.color = "#dddddd";

        botao.innerText = "Ativar modo claro";

        modoEscuroAtivado = true;

    }
})