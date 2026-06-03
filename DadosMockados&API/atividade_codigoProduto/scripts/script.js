const codigoDigitado = document.getElementById("digita-codigo");
const botaoBuscar = document.getElementById("botao-buscar");

const produtosMockados = {
    "001": {
        nome: "Fone de ouvido Headset",
        preço: "R$ 150,00",
        categoria: "Perifericos"
    },
    "002": {
        nome: "Mouse",
        preço: "R$ 100,00",
        categoria: "Perifericos"
    },
    "003": {
        nome: "Notebook",
        preço: "R$ 3.000,00",
        categoria: "Computador"
    },
    "004": {
        nome: "Teclado",
        preço: "R$ 250,00",
        categoria: "Perifericos"
    },
    "005": {
        nome: "Webcam",
        preço: "R$ 130,00",
        categoria: "Perifericos"
    },
    "006": {
        nome: "Monitor",
        preço: "R$ 1.500,00",
        categoria: "Monitores"
    },
    "007": {
        nome: "Cabo de carregador USB-C",
        preço: "R$ 130,00",
        categoria: "Perifericos"
    }
}

function buscarProdutos() {
    const codigo = codigoDigitado.value;

    if(codigo.trim() === "") {
        alert("Digite o código de um produto!");
        return;
    }

    botaoBuscar.addEventListener("click", buscarProdutos)
}