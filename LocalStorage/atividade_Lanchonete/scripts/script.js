const inputPedido = document.getElementById("inputPedido");
const botaoAdicionar = document.getElementById("btnAdicionar");
const listaPedidos = document.getElementById("listaPedidos");
const botaoAtender = document.getElementById("btnAtender");
const pedidoAtual = document.getElementById("pedidoAtual");

let pedidos = [];

// Carregando dados do localStorage
const dados = localStorage.getItem("pedidos");

// Se existir dados no localStorage
if(dados) {
    //a lista de pedidos recebe os dados convertidos em JSON
    pedidos = JSON.parse(dados);

    //! CHAMAR A FUNÇÕA DE RENDERIZAR/mostrar na tela
}

function salvar() {
    // A lista é convertida em texto e armezenada dentro do local do localStorage
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function renderizar() {
    listaPedidos.innerHTML = "";

    pedidos.forEach((pedidos, posicao) => {
        const li = document.createElement("li");
        li.innerText = pedidoAtual.texto;

        if(pedido.concluido) {
            li.style.textDecoration = "line-through";
        }
    })
}