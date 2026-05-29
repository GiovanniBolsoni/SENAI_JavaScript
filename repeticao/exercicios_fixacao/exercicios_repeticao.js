
// Exercicio 1 - Básico - Contagem de 1 a 10
// Objetivo: usar o for para contar e exibir os números de 1 até 10 no console.

// for(i = 1; i <= 10; i++){
//     console.log(i);
// }

// --------------------------------------------------------------------

// Exercicio 2 - Básico - Tabuada de um número
// Objetivo: receber um número e exibir sua tabuada de 1 a 10 usando o for.

// let numero = Number(prompt("Digite um número: "));

// for(let i = 1; i <= 10; i++){
//     console.log(numero * i);
// }

// --------------------------------------------------------------------

// Exercicio 3 - Básico - Soma dos primeiros N números naturais
// Objetivo: somar todos os números de 1 até N (digitado pelo usuário) usando o while.

// let N = Number(prompt("Digite um número: "));
// let soma = 0;
// let i = 1;

// while(i <= N){
//     soma += i;
//     i++;
// }

// console.log(soma)

// --------------------------------------------------------------------

// Exercicio 1 - Intermediário - Exibir os números pares de 1 a 50
// Objetivo: percorrer de 1 a 50 com o for e exibir apenas os números pares usando o operador %.

// for(let i = 1; i <= 50; i++){
//     if(i % 2 === 0)
//     console.log(i);
// }

// --------------------------------------------------------------------

// Exercicio 2 - Intermediário - Jogo de adivinhação
// Objetivo: gerar um número aleatório e manter o loop enquanto o usuário não adivinhar.

// const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let palpite;

// while(palpite != numeroSecreto){
//     palpite = Number(prompt("Tente adivinhar qual é o número secreto entre 1 até 100:"));

//     if(palpite > numeroSecreto){
//         alert("O número secreto é menor do qual foi digitado!");
//     } else if(palpite < numeroSecreto){
//         alert("O número secreto é maior do qual foi digitado!")
//     } else{
//         alert("Parabens, voce acertou o número secreto!");
//     }
// }

// --------------------------------------------------------------------

// Exercicio 3 - Intermediário - Contagem regressiva
// Objetivo: receber um número e contar de volta até 0 usando o while com decremento.

// let numero = Number(prompt("Digite um número para realizar a contagem regressiva:"));

// while(numero > 0){
//     console.log(numero);
//     numero--;
// }

// console.log(0);

// --------------------------------------------------------------------

// Exercicio 4 - Intermediário - Validação de senha
// Objetivo: continuar pedindo a senha enquanto ela estiver errada, liberando o acesso só quando acertar.

// const senhaCorreta = "1234";
// let tentativa = prompt("Digite a senha:");

// while(tentativa != senhaCorreta){
//     alert("Senha incorreta, tente novamente!");
//     tentativa = prompt("Digite a senha: ");
// }

// alert("Senha correta. Seja Bem-vindo(a)!");

// --------------------------------------------------------------------

// Exercicio 5 - Intermediário - Somar até digitar 0
// Objetivo: acumular a soma de números digitados pelo usuário e parar quando ele digitar 0.

// let numero = Number(prompt("Digite um número para somar:"));
// let somaTotal = 0;

// while(numero != 0){
//     somaTotal = somaTotal + numero;
//     numero = Number(prompt("Digite um novo número para somar ou digite 0 para parar:"));
// }

// alert(somaTotal);

// --------------------------------------------------------------------

// Exercicio 6 - Intermediário - Média de valores
// Objetivo: receber 3 números com o for, somá-los e calcular a média ao final.

// let soma = 0;

// for(let i = 1; i <= 3; i++){
//     let numero = Number(prompt(`Digite o ${i}º número: `));
//     soma += numero
// }
// let media = soma / 3;
// console.log("A média é: " + media);

// --------------------------------------------------------------------

// Exercicio 1 - Avançado - Soma dos dígitos de um número
// Objetivo: extrair cada dígito de um número usando % 10 e somá-los um a um com o while.

// let numero = Number(prompt("Digite um número inteiro positivo:"));
// let soma = 0;

// while (numero > 0) {
//     let digito = numero % 10;
//     console.log("Dígito encontrado: " + digito);
//     soma = soma + digito;
//     numero = Math.floor(numero / 10);
// }

// console.log("Soma total: " + soma);

// --------------------------------------------------------------------

// Exercicio 2 - Avançado - Tabuada dinâmica
// Objetivo: exibir a tabuada completa de um número escolhido, formatada como "N x i = resultado".

// let tabuada = Number(prompt("Qual tabuada deseja ver (1 até 10):"));

// for(let i = 1; i <= 10; i++){
//     console.log(tabuada + " x " + i + " = " + tabuada * i);
// }

// --------------------------------------------------------------------

// Exercicio 3 - Avançado - Inverter um número
// Objetivo: inverter a ordem dos dígitos de um número (ex: 123 → 321) usando % e Math.floor.

// let numero = Number(prompt("Digite o número que deseja inverter: "));
// let invertido = 0;

// while(numero > 0){
//     invertido = (invertido * 10) + (numero % 10);
//     numero = Math.floor(numero / 10)
// }

// alert("Resultado do numero invertido: " + invertido);

// --------------------------------------------------------------------

// Exercicio 4 - Avançado - Maior número digitado
// Objetivo: pedir 5 números ao usuário e descobrir qual foi o maior entre eles.

// let maiorNumero = 0;

// for(i = 1; i <= 5; i++){
//     let numero = Number(prompt("Digite os números para mostrar qual foi o maior digitado: "));
//     if(numero > maiorNumero){
//         maiorNumero = numero
//     }
// }

// alert("O maior número digitado é: " + maiorNumero);

// --------------------------------------------------------------------

// Exercicio 5 - Avançado - Lista de nomes (forEach)
// Objetivo: percorrer um array de nomes com o forEach e exibir cada um no console.

// const listaNomes = ["Nicolly", "Mariana", "Giovanni"]

// listaNomes.forEach(function(nome) {
//     console.log("Nomes da lista: " + nome);
// });

// --------------------------------------------------------------------

// Desafio - Sistema de pedidos
// Objetivo: exibir um cardápio, receber a escolha do usuário e validar se o produto existe no array.

// const produtos = ["Pizza", "Hamburguer", "Refrigerante"];

// produtos.forEach(function(produto) {
//     console.log(produto);
// });

// let escolha = prompt("Qual produto você deseja? (Pizza, Hamburguer ou Refrigerante)");
// let valido = false;

// produtos.forEach(function(produto) {
//     if (escolha == produto) {
//         valido = true;
//     }
// });

// if (valido) {
//     console.log("Pedido realizado: " + escolha);
// } else {
//     console.log("Produto inválido!");
// }