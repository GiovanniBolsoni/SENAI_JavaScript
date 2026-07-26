# SENAI JavaScript 🟨

Repositório com os estudos e atividades práticas desenvolvidas durante o curso de **JavaScript do SENAI**. O conteúdo está organizado por tópico, seguindo a ordem em que os assuntos foram aprendidos: da base da linguagem (variáveis, condicionais, repetição, funções) até tópicos mais avançados de manipulação de página (DOM), consumo de dados/API e persistência de dados no navegador (LocalStorage).

Cada pasta contém:
- Um arquivo de **estudo/anotações** com a teoria do conteúdo e exemplos comentados;
- Uma pasta `exercicios_fixacao` com exercícios de fixação sobre o tema;
- Pastas `atividade_*` com **mini-projetos práticos** (HTML + CSS + JS) que aplicam o conteúdo estudado.

## 📚 Conteúdo

| Pasta | Tópico | Descrição |
|---|---|---|
| [`HelloWord/`](./HelloWord) | Primeiro contato | Primeira página em JavaScript, manipulando cor e texto na tela |
| [`variaveis/`](./variaveis) | Variáveis e tipos | `let`, `const`, `var`, tipos primitivos, conversão de tipos, operadores |
| [`condicionais/`](./condicionais) | Estruturas condicionais | `if`, `else`, `else if`, comparação de valores e um projeto de lanchonete |
| [`repeticao/`](./repeticao) | Estruturas de repetição | `for`, `while`, `do while`, `forEach` |
| [`funcoes/`](./funcoes) | Funções | Funções nativas de array (`map`, `filter`, `find`, etc.) e um mini catálogo de produtos |
| [`DOM/`](./DOM) | Manipulação do DOM | Seleção de elementos, eventos e pequenos projetos interativos (curtir, tema claro/escuro, contador, lista dinâmica, login) |
| [`DadosMockados&API/`](./DadosMockados&API) | Dados mockados e API | Consumo de dados simulados e de uma API real (ViaCEP e TMDB), com um clone simplificado de catálogo de filmes |
| [`LocalStorage/`](./LocalStorage) | LocalStorage | Persistência de dados no navegador em projetos de lista de tarefas, lanchonete e catálogo com filtros |

Cada uma dessas pastas tem seu próprio `README.md` detalhando os arquivos e o que foi praticado em cada atividade.

## 🛠️ Tecnologias utilizadas

- **HTML5** – estrutura das páginas
- **CSS3** – estilização das atividades
- **JavaScript (Vanilla)** – toda a lógica, sem frameworks ou bibliotecas
- Consumo de APIs públicas (ViaCEP e TMDB) em `DadosMockados&API/`

## ▶️ Como executar

Os projetos são páginas estáticas simples, sem necessidade de instalação de dependências. Para rodar qualquer atividade:

1. Clone o repositório:
   ```bash
   git clone https://github.com/GiovanniBolsoni/SENAI_JavaScript.git
   ```
2. Abra o arquivo `index.html` da atividade desejada diretamente no navegador, ou use a extensão **Live Server** (VS Code) para melhor experiência.

> Alguns arquivos de estudo (como `variaveis.js`, `condicionais.js`, etc.) têm o código comentado, pois foram usados para testar trecho por trecho durante a aula — para ver o resultado no console, basta descomentar o trecho desejado e abrir o `index.html` correspondente com o console do navegador aberto (F12).

## 👤 Autor

Projeto desenvolvido por **Giovanni Bolsoni** durante o curso de JavaScript do SENAI, como prática dos conceitos vistos em aula.
