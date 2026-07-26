# LocalStorage 💾

Estudo sobre o **`localStorage`**, mecanismo do navegador que permite salvar dados no dispositivo do usuário, de forma que eles continuem disponíveis mesmo depois de fechar ou recarregar a página. Os dados são sempre armazenados como texto, por isso os objetos/arrays são convertidos com `JSON.stringify()` ao salvar e `JSON.parse()` ao carregar.

## Mini-projetos

- **`atividade_ListaTarefas/`** — Lista de tarefas com persistência: as tarefas adicionadas pelo usuário são salvas no `localStorage` (`salvarTarefas`) e recarregadas automaticamente (`mostrarTarefas`) sempre que a página é aberta novamente, então a lista não se perde ao atualizar o navegador.

- **`atividade_Lanchonete/`** — Painel de pedidos de uma lanchonete com persistência:
  - Permite adicionar pedidos, que ficam salvos em uma lista renderizada dinamicamente (`renderizar`);
  - O botão **Atender** busca o próximo pedido ainda não concluído (`find`) e o marca como "atendendo";
  - Cada pedido pode ser marcado como concluído (clique, com risco no texto) ou removido (botão 🗑️, usando `splice`);
  - Tudo é salvo no `localStorage` a cada alteração, para não perder os pedidos ao recarregar a página.

- **`atividade_filtrosordenacao/`** — Catálogo de produtos com busca e ordenação:
  - Filtra os produtos pelo nome digitado, usando `filter` + `includes`;
  - Ordena os resultados por nome (A-Z / Z-A) ou por preço (menor/maior), usando `sort` e `localeCompare`;
  - Gera os cartões de produto dinamicamente no HTML e exibe uma mensagem quando nenhum resultado é encontrado.

## O que foi praticado

- Salvar e recuperar dados do navegador com `localStorage.setItem` / `localStorage.getItem`;
- Converter dados entre objeto/array e texto com `JSON.stringify` / `JSON.parse`;
- Renderizar listas dinamicamente a partir de um array em memória sincronizado com o `localStorage`;
- Combinar filtro (`filter`) e ordenação (`sort`) de arrays de objetos para montar um pequeno catálogo interativo.
