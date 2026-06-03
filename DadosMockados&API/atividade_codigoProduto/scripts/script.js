const codigoDigitado = document.getElementById("digita-codigo");
const botaoBuscar = document.getElementById("botao-buscar");

const mensagemErro = document.getElementById("mensagem-erro");

const nomeProduto = document.getElementById("nome-produto");
const precoProduto = document.getElementById("preco-produto");
const categoriaProduto = document.getElementById("categoria-produto");

const produtosMockados = {
    "001": {
        nome: "Fone de ouvido Headset",
        preço: "R$ 150,00",
        categoria: "Perifericos"
    },
    "002": {
        nome: "Mouse Gamer",
        preço: "R$ 100,00",
        categoria: "Perifericos"
    },
    "003": {
        nome: "Notebook i5",
        preço: "R$ 3.000,00",
        categoria: "Computador"
    },
    "004": {
        nome: "Teclado Gamer",
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

    const produto = produtosMockados[codigo];

    if(codigo.trim() === "") {
        mensagemErro.innerText = "Digite o código do produto!"
        return;
    }
    
    if(!produto) {
        mensagemErro.innerText = "Código inexistente!"
        return;
    }
    
    mensagemErro.innerHTML = "";

    nomeProduto.innerText = produto.nome
    precoProduto.innerText = produto.preço
    categoriaProduto.innerText = produto.categoria
}

botaoBuscar.addEventListener("click", buscarProdutos);

codigoDigitado.addEventListener("input", buscarProdutos);