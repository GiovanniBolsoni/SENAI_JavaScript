// Seleciona os elementos do HTML pelos seus IDs
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaItens = document.getElementById("lista");
const inputItem = document.getElementById("input-item");
const avisoTarefa = document.getElementById("aviso-tarefa");
const limpaItens = document.getElementById("limpa-itens");
const contadorTarefas = document.getElementById("contador-tarefas");

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

    // Ao clicar no texto da tarefa, alterna o risco (concluída/não concluída)
    item.addEventListener("click", (e) => {
        if (e.target === botaoLixeira) return;
        // Garante que clicar na lixeira não ativa o risco
 
        item.classList.toggle("concluida");
        // .classList.toggle() adiciona a classe se não tiver, remove se já tiver
        // A classe "concluida" deve ter no CSS: text-decoration: line-through;
 
        atualizarContador();
        // Atualiza o contador sempre que uma tarefa for marcada ou desmarcada
    });

    // Cria o botão da lixeira e define seu ícone
    const botaoLixeira = document.createElement("button");
    botaoLixeira.innerText = "🗑️";

    // Ao clicar na lixeira, remove o item (<li>) da lista
    botaoLixeira.addEventListener("click", () => {
        item.remove();
        atualizarContador();
    });

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

    // Atualiza o contador após adicionar uma nova tarefa
    atualizarContador();

});

// Escuta o clique no botão "Limpar" e apaga todos os itens da lista de uma vez
limpaItens.addEventListener("click", () => {
    listaItens.innerHTML = "";

    // Zera o contador após limpar tudo
    atualizarContador();
});

// Função que atualiza o contador de tarefas na tela
function atualizarContador() {
    const total = listaItens.querySelectorAll("li").length;
    // querySelectorAll("li") seleciona todos os <li> dentro da lista
    // .length retorna a quantidade
 
    const concluidas = listaItens.querySelectorAll("li.concluida").length;
    // Seleciona apenas os <li> que têm a classe "concluida"
 
    contadorTarefas.innerText = `Tarefas: ${concluidas} de ${total} concluídas`;
    // Exemplo de exibição: "Tarefas: 2 de 5 concluídas"
}