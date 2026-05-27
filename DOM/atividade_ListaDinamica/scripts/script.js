const botaoAdicionar = document.getElementById("botao-adicionar");
const listaItens = document.getElementById("lista");
const inputItem = document.getElementById("input-item");
const avisoTarefa = document.getElementById("aviso-tarefa");

let tarefas = [];

botaoAdicionar.addEventListener("click", () => {
    const tarefa = inputItem.value;

    if(tarefa === ""){
        avisoTarefa.innerText = "Adicione uma tarefa!"
        return
    }

    avisoTarefa.innerText = "";

    const item = document.createElement("li")
    item.innerText = tarefa
    listaItens.appendChild(item)

    inputItem.value = "";

    Item.addEventListener("click", () => {
        item.remove()
    });
});

