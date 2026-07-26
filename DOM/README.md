# Manipulação de DOM 🖱️

Estudo sobre o **DOM (Document Object Model)** — a forma como o navegador organiza o HTML em uma estrutura que o JavaScript consegue acessar, ler e modificar. Aqui entram seleção de elementos, eventos de clique e criação dinâmica de elementos na página.

## Arquivo de estudo

- **`DOM.js`** — Anotações e exemplos comentados sobre os principais métodos de seleção de elementos:
  - `getElementById` — seleciona um elemento pelo `id`;
  - `querySelector` — seleciona o primeiro elemento que corresponde a um seletor CSS;
  - `querySelectorAll` — seleciona todos os elementos que correspondem a um seletor;
  - `getElementsByClassName` — seleciona todos os elementos de uma classe.
- **`index.html`** — Página de apoio para testar os exemplos do `DOM.js` no console.

## Mini-projetos (atividades práticas)

- **`atividade_BotaodeCurtida/`** — Botão de curtir (like) que alterna entre "Curtido" e "Não curtido" a cada clique, atualizando o texto, a cor e um contador de curtidas na tela.

- **`atividade_ClaroeEscuro/`** — Alternador de tema **claro/escuro** (`🌓`): um botão troca as cores de fundo, texto e caixas da página entre um tema claro e um tema escuro, controlado por uma variável booleana (`modoEscuroAtivado`).

- **`atividade_Contador/`** — Contador de cliques simples: cada clique no botão incrementa um número exibido na tela.

- **`atividade_ListaDinamica/`** — Lista de tarefas dinâmica: permite adicionar itens digitados em um campo de texto, marcar como concluído (clicando no item, que ganha um risco/`line-through`), remover itens individualmente (botão 🗑️), limpar a lista inteira e acompanhar um contador de "X de Y tarefas concluídas" atualizado em tempo real.

- **`atividade_Login/`** — Tela de login simples: valida usuário e senha digitados contra valores fixos no código (`admin` / `1234`) e exibe uma mensagem de sucesso ou erro.

## O que foi praticado

- Selecionar elementos HTML a partir do JavaScript;
- Reagir a eventos do usuário com `addEventListener` (clique principalmente);
- Criar e remover elementos dinamicamente (`document.createElement`, `appendChild`, `remove`);
- Alternar classes e estilos via JavaScript (`classList.toggle`, `style.*`);
- Validar dados de formulário no navegador.
