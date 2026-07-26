# Dados Mockados e Consumo de API 🌐

Estudo sobre como trabalhar com dados no front-end: primeiro simulando respostas (dados "mockados", fixos no próprio código) e depois consumindo dados reais de uma API externa com `fetch`.

## Mini-projetos

- **`BuscacomDadosMockados/`** — Busca de endereço por CEP usando um objeto fixo no código (`cepMockados`) como se fosse uma base de dados. Ao digitar um CEP cadastrado, os campos de rua, bairro, cidade e estado são preenchidos automaticamente. Serve de base para entender a lógica antes de conectar a uma API de verdade.

- **`BuscacomAPI/`** — Mesma ideia da busca de CEP, mas agora consumindo a **API pública ViaCEP** de verdade: o CEP digitado é limpo com uma expressão regular (removendo tudo que não é número) e enviado para a API, que retorna os dados reais do endereço.

- **`atividade_codigoProduto/`** — Consulta de produto por código: a partir de um objeto `produtosMockados` (código, nome, preço e categoria), o usuário digita um código e o sistema exibe os dados do produto correspondente ou uma mensagem de erro caso o código não exista.

- **`CopiaFlix/`** — Mini-clone de um catálogo de filmes/séries (inspirado no Netflix), consumindo a **API do TMDB (The Movie Database)**:
  - Ao carregar a página, busca e exibe os filmes populares (`buscarPopulares`);
  - Conforme o usuário digita (mais de 2 caracteres) no campo de busca, faz uma busca em tempo real (`buscarFilmes`) usando `async/await` e `fetch`;
  - Monta dinamicamente os cartões de filme com pôster, título e nota, ignorando resultados sem imagem disponível.

  > ⚠️ **Atenção:** o arquivo `scripts/script.js` desta atividade contém uma chave de API do TMDB fixa no código (`API_KEY`). Antes de publicar este repositório, é recomendado gerar uma nova chave no site do TMDB e remover a atual do histórico do Git, movendo-a para uma variável de ambiente ou arquivo não versionado.

## O que foi praticado

- Simular uma base de dados com objetos JavaScript antes de integrar uma API real;
- Fazer requisições HTTP com `fetch` e tratar respostas assíncronas com `async/await`;
- Tratar erros de requisição com `try/catch`;
- Manipular o DOM para exibir os dados retornados dinamicamente;
- Usar expressões regulares simples para limpar dados digitados pelo usuário (ex: CEP).
