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
    // Better Comments
    renderizar();
}

function salvar() {
    // A lista é convertida em texto e armezenada dentro do local do localStorage
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function renderizar() {
    listaPedidos.innerHTML = "";

    pedidos.forEach((pedido, posicao) => {
        const li = document.createElement("li");
        li.innerText = pedido.texto;

        if(pedido.concluido) {
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click", () => {
            pedido.concluido = true;
            salvar();
            renderizar();
        })

        // Botão remover
        const btnRemover = document.createElement("button");
        btnRemover.innerText = "🗑️";

        btnRemover.addEventListener("click", () => {
            pedidos.splice(posicao, 1);
            salvar();
            renderizar();
        })

        li.appendChild(btnRemover);
        listaPedidos.appendChild(li);
    })
}

// Evento para adicionar pedidos
botaoAdicionar.addEventListener("click", () => {
    const textoDigitado = inputPedido.value;

    if(textoDigitado === "") {
        alert("Digite um pedido!");
        return;
    }

    pedidos.push({
        texto: textoDigitado,
        concluido: false
    })

    salvar();
    renderizar();

    pedidoAtual.innerText = "Nenhum pedido sendo atendido";
    inputPedido.value = "";
})

// Evento do botão de atender/ marcar como concluido

botaoAtender.addEventListener("click", () => {

    // Encontrar o primeiro elemento que NÃO está concluido
    const proximo = pedidos.find(pedido => pedido.concluido == false);

    // Se NÃO existir nada dentro de próximo
    if(!proximo) {
        pedidoAtual.innerText = "Todos os pedidos já foram atendidos";
        return;
    }

    // Marcar como concluido
    proximo.concluido = true;
    pedidoAtual.innerText = `Atendendo: ${proximo.texto}`;
    salvar();
    renderizar();
})