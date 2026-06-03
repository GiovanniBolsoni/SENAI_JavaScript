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
        
       const botaoRemover = document.createElement("button")
        botaoRemover.innerText = "🗑️";

        // cria a classe para usar a estilização do botão
        botaoRemover.className = "botao-remover";

        botaoRemover.addEventListener("click", () => {
            // chamar função para remover tarefa
            removerTarefas(i);
        })

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    }
}

function removerTarefas(posicaoTarefa) {
    // splice -> (posicaoInicial, qtde_itens)
    tarefas.splice(posicaoTarefa, 1);

    // Depois de remover, chamo a função de salvar no localStorage
    // atualiza localStorage com array de tarefas atualizado
    salvarTarefas();

    // Mostra as tarefas atualizadas, sem as tarefas que foram removidas
    mostrarTarefas();
}

function adicionarTarefas() {
    const valorTarefa = inputTarefa.value;

    if(valorTarefa.trim() === "") {
        alert("Digite uma tarefa!");
        return; // não deixa a tarefa vazia aparecer na tela
    }

    // Adiciona tarefas dentro do array
    tarefas.push(valorTarefa);
    inputTarefa.value = "";

    salvarTarefas();
    mostrarTarefas();
}

// função para carregar as tarefas salvas no localStorage
function carregarTarefas() {
    // Pega as tarefas do localStorage e armazena na variavel 'tarefasSalvas'
    const tarefasSalvas = localStorage.getItem("tarefas");

    // Se existir alguma coisa dentro de tarefasSalvas
    // Então converte a tarefa e mostra na tela
    if(tarefasSalvas) {
        // Transforma o texto que está no localStorage em array novamente, utilizando '.parse'
        tarefas = JSON.parse(tarefasSalvas);
        mostrarTarefas();
    }
}

botaoAdicionar.addEventListener("click", adicionarTarefas);

carregarTarefas();