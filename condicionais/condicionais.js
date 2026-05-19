
// ESTRUTURA CONDICIONAL - CAMINHOS A SEREM SEGUIDOS 
// CONDICÕES E DECIDIMOS OS CAMINHOS QUE VAMOS SEGUIR NA ESTRUTURA CONDICONAL

/*
    IF - SE...
    ELSE - SENÃO...
    ELSE IF - SENÃO SE...
    SWITCH/CASE - SWITCH É UM MENU DE OPÇÕES E PARA CADA "CASE" É UMA OPÇÃO
*/

// let nome = prompt("Digite seu nome: ");
// console.log(nome);

// EXEMPLOS:
// 1. SISTEMA DE VERIFICAÇÃO DE TEMPERATURA
// TUDO QUE É DIGITADO ATRAVES DO "PROMPT", É RECEBIDO COMO TIPO TEXTO
// ENTÃO VAMOS CONVERTER PARA NUMBER(NUMERO) PARA GARANTIR QUE A VALIDAÇÃO NÃO TENHA PROBLEMA
// let temperatura = Number(prompt("Digite uma temperatura: "));

// if (temperatura < 20){
//     console.log("Está frio!");
// } else {
//     console.log("Está calor!");
// }

// 2. VERIFICAR NIVEL DE BATERIA
// let bateria = Number(prompt("Digite o nivel da bateria (%): "));

// if(bateria <= 30){
//     alert("Bateria está fraca!");
// } else {
//     alert("Bateria está carregada!");
// }

// 3. SISTEMA DE ACESSO
// "tolowerCase" deixa todas as letras em minisculo
// "toUpperCase" deixa todas as letras em maiusculo
// let tipoUsuario = prompt("Digite o tipo do usuário (admin, cliente): ").toLowerCase();

// if(tipoUsuario == "admin"){
//     console.log("Acesso total ao sistema");
// } 
// else if(tipoUsuario == "cliente"){
//     console.log("Acesso limitado ao sistema");
// } 
// else{
//     console.log("Tipo de usuário inválido")
// }

// 4. CLASSIFICAR A QUALIDADE DA INTERNET
// let velocidade = Number(prompt("Digite a velocidade da internet:"));
// if(velocidade >= 100){
//     console.log("Internet rápida!");
// } 
// else if(velocidade >= 50){
//     console.log("Internet é média!");
// } 
// else{
//     console.log("internet lenta!");
// }

// 5. Analisar volume de itens
//* usando operadores lógicos
// let quantidade = 10;

// if(quantidade === 0){
//     console.log("Nenum item selecionado");
// } else if(quantidade < 5){
//     console.log("Poucos itens");
// } else if(quantidade >= 5 && quantidade < 10){
//     console.log("Quantidade média de itens;");
// } else {
//     console.log("Muitos itens");
// }

// 6. CONDICIONAL ANINHADA - UMA CONDICIONAL DENTRO DA OUTRA
// const nota = 10;

// if(nota >= 7){
//     if(nota === 10){
//         console.log("Aprovado com premiação!");
//     }
//     else{
//         console.log("Aprovado!");
//     }
// }
// else{
//     console.log("Reprovado!");
// }

// 7. ADAPTAÇÃO DE TELA DE DISPOSITIVO !!!
// let dispositivo = prompt("Voce está usando: celular, tablet ou computador? ").toLowerCase();

// if(dispositivo == "celular" || dispositivo == "tablet"){
//     console.log("Modo mobile ativado");
// } 
// else if(dispositivo == "computador"){
//     console.log("Modo desktop ativado");
// } 
// else{
//     console.log("Dispositivo desconhecido.")
// }

// 8. SWITCH/CASE - MUDAR O TEMA DO DISPOSITIVO
// let tema = prompt("Digite um tema: claro, escuro, azul ou digite sair").toLowerCase();

// switch(tema) {
//     case "claro":
//         console.log("Tema claro ativado.");
//         document.body.style.backgroundColor = "#ffffff";
//         break;
//     case "escuro":
//         console.log("Tema escuro ativado.");
//         document.body.style.backgroundColor = "#000000";
//         break
//     case "azul":
//         console.log("Tema azul ativado.");
//         document.body.style.backgroundColor = "#0000FF";
//         break;
//     default:
//         console.log("Tema inválido!");
//         break;
// }