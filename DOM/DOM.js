
// MANIPULAÇÃO DE DOM
// DOM -> Document Object Model
// È a forma como o navegador organiza o html para que p js consiga acessar os elementos

// PRINCIPAIS METODOS DE SELEÇÃO DE ELEMENTOS DOM

/*
    getElementById -> Serve para selecionar um elemento pelo ID;

    querySelector -> Serve para selecionar o 1º elemento que corresponde a um seletor CSS (tag(ex: p. h1, h2), nome de classe);

    querySelectorAll -> Serve para selecionar TODOS os elementos que correspondem a um seletor;

    getElementsByClassName -> Serve para selecionar TODOS os elementos que correspondem a uma classe
*/

// --------------------------------------------------------------------

// getElementById
// const titulo = document.getElementById("titulo"); // trazendo o elemento por completo
// const valor = document.getElementById("titulo").innerText; // trazendo o valor do texto 

// console.log(titulo);
// console.log(valor)

// --------------------------------------------------------------------

// querySelector
// const titulo = document.querySelector("#titulo"); // chamando id -> #nomeid

// const paragrafo = document.querySelector(".paragrafo"); // chamando classes -> .nomeclasses

// const tituloH2 = document.querySelector("h2") // chamando tags -> h2

// console.log(titulo);
// console.log(paragrafo);
// console.log(tituloH2);

// --------------------------------------------------------------------

// querySelectorAll
// const elementos = document.querySelectorAll(".texto");
// imprime o elemento (p)
// console.log(elementos);

// imprime o valor que está dentro do elemento (p)
// elementos.forEach(elemento => console.log(elemento.innerText));

// trocando o texto que está dentro do elemento
// elementos.forEach(elemento => elemento.innerText = "Alterado");

// trocando a tag
// elementos.forEach(elemento => elemento.innerHTML = "<h2>item</h2>");

// trocando a cor da fonte (letra)
// elementos.forEach(elemento => elemento.style.color = "#0000ff");

// Evento de clique
// const botao = document.getElementById("btn");

// Adicionando um "escutador de eventos" no botão
// botao.addEventListener("click", () => {
//     alert("Voce clicou!");
// });

// Evento de dogitação (input / keyup)
// evento input -> dispara sempre que digita, em tempo real

const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

campo.addEventListener("input", () => {

    // value -> o valor digitado dentro da caixinha de texto
    resultado.innerText = campo.value;
});

// Evento keyup -> dispara quando solta a tecla
campo.addEventListener("keyup", () => {
    resultado.innerText = campo.value;
    console.log("Tecla pressionada");
});

// Evento de mouse
const elemento = document.getElementById("troca-cor");
const botao = document.getElementById("btn")

// mouseover -> quando passa o mouse por cima do elemento
elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "#ff0000"
});