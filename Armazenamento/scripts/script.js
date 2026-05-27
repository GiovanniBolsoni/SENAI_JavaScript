const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// Criando uma lista vazia
let tarefas = [];

// Função para salvar tarefas no local storage
function salvarTarefas(){
    
    /* 
        localStorage -> armazenamento local do navegador
        setItem -> salva no armazenamento o conteúdo recebido
        JSON.stringify(tarefas) -> pega a lista de tarefas, converte para texto (string) e armazena esse texto
    */
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Função para mostrar tarefas na tela
function mostrarTarefas(){
    listaTarefas.innerHTML = ""; // innerHTML é para adicionar itens na tela, nesse caso como está vazio está "limpando a tela"

    for(let i = 0; i < tarefas.length; i++){
        const li = document.createElement("li"); // para cada elemento, cria um "li"
        li.innerText = tarefas[i]; // cada vez que criar o "li", passa o valor que está na lista de tarefas na posição i
    }
}