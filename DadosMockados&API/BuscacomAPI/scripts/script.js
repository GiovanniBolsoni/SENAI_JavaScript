
const campoCep = document.getElementById("cep");
const botaoBuscar = document.getElementById("botao-buscar");
const campoRua = document.getElementById("rua");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");

function preencherCampos(dados) {
    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;
}

function limparCampos() {
    campoRua.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

function buscarCep() {
    
    // pega o valor digitado no campo e remove tudo que não for número (\D)
    // O \D é o oposto de \d que representa os dígitos numéricos (0-9)
    // g -> siginifica "global", o que quer dizer que estamos aplicando a remoção em todos os caracteres, não só no primeiro
    // trim() -> remove os espaços em branco no inícoo e no fim do texto digitado
    const cep = campoCep.value.replace(/\D/g, "").trim();

    if(cep.length !== 8) {
        alert("CEP inválido!");
        limparCampos();
        return; //quebra o código aqui mesmo, não executa mais nada para baixo
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`

    // faz a requisição HTTP para a URL da API
    // busca as informações dentro do ViaCep
    fetch(url)
    .then(reponse => reponse.json()) // quando a resposta chega converte a resposta para JSON
    .then(dados => {
        // verifica se a API retornou um erro (CEP não existe)
        console.log(dados);
        
        if(dados.erro) {
            alert("CEP não encontrado!");
            limparCampos();
            return;
        }

        // Se tudo der certo, preeenche os campos com os dados recebidos
        preencherCampos(dados);
    })
    
    // Caso aconteça algum erro na requisição (ex. sem internet)
    .catch(() => {
        alert("Erro ao buscar CEP.")
    })
}

botaoBuscar.addEventListener("click", buscarCep);

campoCep.addEventListener("keypress", (dados) => {
    if (dados.key === "Enter") {
        buscarCep();
    }
});