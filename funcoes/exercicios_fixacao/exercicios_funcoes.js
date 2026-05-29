
// Exercício 1 - Básico - Lista numerada
// Objetivo: percorrer um array de nomes e exibir cada um com seu número de posição.

// const nomes = ["Giovanni", "Amanda", "Gustavo", "Felipe", "Davi"]

// nomes.forEach((nomes, index) => {
//     console.log(`${index} - ${nomes}`);
// });

// --------------------------------------------------------------------

// Exercício 2 - Básico - Exibir posições
// Objetivo: mostrar cada cor do array junto com o índice em que ela se encontra.

// const cores = ["Azul", "Amamrelo", "Vermelho", "Verde"]

// cores.forEach((cores, index) => {
//     console.log(`A cor ${cores} está na posição: ${index}`);
// });

// --------------------------------------------------------------------

// Exercício 3 - Básico - Primeiro e último
// Objetivo: acessar e exibir o primeiro e o último item de um array pelo índice.

// const marcas = ["Adidas", "Puma", "Rolex", "Dell", "Duracell"]

// console.log(marcas[0]);
// console.log(marcas[marcas.length - 1]);

// --------------------------------------------------------------------

// Exercício 4 - Básico - Contagem de itens
// Objetivo: usar .length para contar e exibir quantos itens há no array.

// const frutas = ["Maçã", " Banana", " Uva", " Manga", " Pera"]

// console.log(`O array tem ${frutas.length} frutas, e elas são: ${frutas} `);

// --------------------------------------------------------------------

// Exercício 1 - Intermediário - Filtrar por posição
// Objetivo: percorrer um array de números e exibir apenas os pares com sua posição.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.forEach((numeros, index) => {
//     if(numeros % 2 === 0){
//         console.log(`Posição ${index}: ${numeros}`);
//     }
// });

// --------------------------------------------------------------------

// Exercício 2 - Intermediário - Destacar item específico
// Objetivo: acessar e exibir somente o item que está em um índice específico do array.

// const nomes = ["Giovanni", " Amanda", " Gustavo", " Felipe", " Davi"]

// nomes.forEach((nome, index) => {
//     if(index === 2){
//         console.log(`Nome especial: ${nome}`);
//     }
// });

// --------------------------------------------------------------------

// Exercício 3 - Intermediário - Transformar com índice
// Objetivo: usar .map() para criar um novo array formatando cada item com sua posição.

// const numeros = [10, 20, 30, 40, 50,]

// const resultados = numeros.map((numero, index) => {
//       return(`${index + 1}º número: ${numero}`);
// });

// console.log(resultados);

// --------------------------------------------------------------------

// Exercício 4 - Intermediário - Verificar posição
// Objetivo: exibir apenas os itens do array que estão após o índice 2.

// const produtos = ["Cama", "Armário", "Mesa", "Cadeira", "Televisão"]

// produtos.forEach((produto, index) => {
//       if(index > 2){
//             console.log(produto);
//       }
// });

// --------------------------------------------------------------------

// Exercício 5 - Intermediário - Buscar com condição
// Objetivo: usar .find() para retornar o primeiro número do array que seja maior que 50.

// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// const resultados = numeros.find((numero) => {
//       return numero > 50
// })

// console.log(resultados);

// --------------------------------------------------------------------

// Exercício 1 - Avançado - Ranking simples
// Objetivo: usar .map() para transformar um array de nomes em um ranking numerado.

// const nomes = ["Giovanni", "Amanda", "Gustavo", "Felipe", "Davi"]

// const resultados = nomes.map((numero, index) => {
//       return(`${index + 1}º lugar: ${numero}`)
// })

// console.log(resultados);

// --------------------------------------------------------------------

// Exercício 2 - Avançado - Separar por posição
// Objetivo: separar os itens do array em dois novos arrays: posições pares e ímpares.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const pares = []
// const impares = []

// numeros.forEach((numero, index) => {
//     if(index % 2 === 0){
//         pares.push(numero)
//     } else{
//         impares.push(numero)
//     }

// });

// console.log(`Números pares: ${pares}`);
// console.log(`Números impares: ${impares}`);

// --------------------------------------------------------------------

// Exercício 3 - Avançado - Montar frase
// Objetivo: usar .join() para unir todos os itens de um array em uma única string.

// let palavras = ["Montando", "uma", "frase", "usando", "(Join)", "em", "JavaScript"]

// let frase = palavras.join(" ");
// console.log(frase);

// --------------------------------------------------------------------

// Exercício 4 - Avançado - Buscar e mostrar posição
// Objetivo: usar .indexOf() para encontrar em qual posição está o nome digitado pelo usuário.

// const nomes = ["Giovanni", "Daniel", "Gustavo", "Matheus", "Guilherme"]

// let nomeDigitado = prompt("Digite seu nome e veja em que posição está da lista (Giovanni, Daniel, Gustavo, Matheus ou Guilherme): ");

// let posicao = nomes.indexOf(nomeDigitado);

// if(posicao == -1){
//     console.log("Nome não encontrado");
// } else{
//     console.log(`O nome digitado esta na ${posicao}º posição da lista`);
// }

// --------------------------------------------------------------------

// Exercício 5 - Avançado - Marcar itens
// Objetivo: exibir uma lista de tarefas formatada com checkbox e número de ordem.

// let tarefas = ["Lavar a louça", "Fazer o dever", "Tirar o lixo", "Limpar o quarto", "Passear com o pet"]

// tarefas.forEach((tarefa, index) => {
//     console.log(`[  ] ${tarefa} tarefa ${index + 1}`);
// });

// --------------------------------------------------------------------

// Desafio - Sistema de escolha
// Objetivo: exibir um array de cores com seus índices e deixar o usuário escolher uma pelo número.

// const cores = ["Azul", "Vermelho", "Verde", "Amarelo", "Roxo", "Rosa"]

// cores.forEach((cor, index) => {
//     console.log(` A cor ${cor} está no indice: ${index}`);
// });

// let corDigitada = prompt("Informe um número: ");
// alert(`A cor escolhida foi: ${cores[corDigitada]}`);