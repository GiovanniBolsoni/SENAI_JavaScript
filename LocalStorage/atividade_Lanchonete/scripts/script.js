const inputPedido = document.getElementById("input-pedido");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaPedidos = document.getElementById("lista-pedidos");
const botaoAtender = document.getElementById("btn-atender");
const pedidoAtual = document.getElementById("pedido-atual");

botaoAdicionar.addEventListener("click", () => {
    let pedidoDigitado = inputPedido.value;

    const li = document.createElement("li");

    li.innerText = pedidoDigitado;

    listaPedidos.appendChild(li);

    inputPedido.value = "";

    const botaoRemover = document.createElement("button")
    botaoRemover.innerText = "🗑️";
    li.appendChild(botaoRemover);

    botaoRemover.addEventListener("click", () => {
        li.remove();
    });

    li.addEventListener("click", () => {
        if(li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through"
        }
    });
});

botaoAtender.addEventListener("click", () => {
    const primeiroPedido = listaPedidos.firstChild

    pedidoAtual.innerText = "Atendendo: " + primeiroPedido.innerText;

    primeiroPedido.remove();
});