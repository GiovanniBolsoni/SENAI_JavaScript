// Seleciona os elementos do HTML pelos seus IDs
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaItens = document.getElementById("lista");
const inputItem = document.getElementById("input-item");
const avisoTarefa = document.getElementById("aviso-tarefa");
const limpaItens = document.getElementById("limpa-itens");

// Array para armazenar as tarefas (reservado para uso futuro)
let tarefas = [];

// Escuta o clique no botão "Adicionar"
botaoAdicionar.addEventListener("click", () => {

    // Captura o texto digitado no input
    const tarefa = inputItem.value;

    // Valida se o campo está vazio e exibe aviso, interrompendo a execução
    if(tarefa === ""){
        avisoTarefa.innerText = "Adicione uma tarefa!"
        return
    }

    // Limpa o aviso caso o campo esteja preenchido
    avisoTarefa.innerText = "";

    // Cria um novo elemento <li> e define seu texto com o valor digitado
    const item = document.createElement("li")
    item.innerText = tarefa

    // Cria o botão da lixeira e define seu ícone
    const botaoLixeira = document.createElement("button");
    botaoLixeira.innerText = "🗑️";

    // Ao clicar na lixeira, remove o item (<li>) da lista
    botaoLixeira.addEventListener("click", () => {
        item.remove();
    })

    // Estiliza o botão da lixeira para remover bordas e definir cursor de ponteiro
    botaoLixeira.style.border = "none";
    botaoLixeira.style.cursor = "pointer";
    botaoLixeira.style.backgroundColor = "none";

    // Adiciona o botão da lixeira dentro do <li>
    item.appendChild(botaoLixeira);

    // Adiciona o <li> (com a lixeira) na lista do HTML
    listaItens.appendChild(item);

    // Limpa o campo de input após adicionar a tarefa
    inputItem.value = "";
});

// Escuta o clique no botão "Limpar" e apaga todos os itens da lista de uma vez
limpaItens.addEventListener("click", () => {
    listaItens.innerHTML = "";
});