
// Exercicio 1 - Básico - Verificar maioridade
// Objetivo: Verificar se a pessoa é maior ou menor de idade

const idade01 = prompt("Digite sua idade: ");

if(idade01 >= 18){
    alert("Voce é maior de idade!");
} else {
    alert("Voce é menor de idade!");
}

// ------------------------------------------------------------------------

// Exercicio 2 - Básico - Verificar se um número é positivo ou negativo
// Objetivo: Checar se o número digitado é positivo ou negativo

let numero01 = prompt("Digite um número: ");

if(numero01 > 0){
    console.log("O número é positivo");
} else{
    console.log("O número é negativo");
}

// ------------------------------------------------------------------------

// Exercicio 3 - Básico - Aprovação em uma prova
// Objetivo: Informar se o aluno foi aprovado ou reprovado com base na nota

let nota = prompt("Digite a nota do aluno: ");

if(nota >= 60){
    alert("Aprovado!");
} else {
    alert("Reprovado :(")
}

// ------------------------------------------------------------------------

// Exercicio 4 - Básico - Verificar se um número é positivo, negativo ou zero
// Objetivo: Classificar o número em três categorias: positivo, negativo ou zero

let numero02 = prompt("Digite um número: ");

if(numero02 > 0){
    alert("O numero é positivo!");
} else if(numero02 < 0){
    alert("O número é negativo!")
} else {
    alert("O número é zero!");
}

// ------------------------------------------------------------------------

// Exercicio 5 - Básico - Classificação de idade
// Objetivo: Classificar a pessoa em criança, adolescente ou adulto

const idade02 = prompt("Digite sua idade: ");

if(idade02 >=0 && idade02 <= 12){
    alert("Voce é uma criança!");
} else if (idade02 >= 13 && idade02 <=17){
    alert("Voce é um adolescente!");
} else if(idade02 >= 18){
    alert("Voce é um adulto");
} else{
    alert("Idade inválida, insira um número positivo");
}

// ------------------------------------------------------------------------

// Exercicio 6 - Básico - Verificar se um número é par ou ímpar
// Objetivo: Determinar se o número é par ou ímpar

let numero03 = Number(prompt("Digite um número: "));

if(numero03 %2 == 0){
    alert("O número é par");
} else {
    alert("O número é impar");
}

// ------------------------------------------------------------------------

// Exercicio 1 - Intermediário - Calculadora simples
// Objetivo: Realizar uma operação matemática entre dois números

let a = Number(prompt("Digite o primeiro número: "));
let b = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação desejada (+, -, *, /): ");

let resultado;

if (operacao === "+") {
    resultado = a + b;
} else if (operacao === "-") {
    resultado = a - b;
} else if (operacao === "*") {
    resultado = a * b;
} else if (operacao === "/") {
    if (b === 0) {
        alert("Erro: divisão por zero!");
    } else {
        resultado = a / b;
    }
    } else {
        alert("Operação inválida!");
    } if (resultado !== undefined) {
        alert(`Resultado: ${resultado}`);
    }

// ------------------------------------------------------------------------

// Exercicio 2 - Intermediário - Maior entre três números
// Objetivo: Encontrar o maior número entre três valores informados

let numero04 = Number(prompt("Digite um número: "));
let numero05 = Number(prompt("Digite outro número: "));
let numero06 = Number(prompt("Digite mais um número: "));

    if (numero04 >= numero05 && numero04 >= numero06) {
        alert('O maior número é: ' + numero04);
    }
    else if (numero05 >= numero04 && numero05 >= numero06) {
        alert('O maior número é: ' + numero05);
    }
    else if (numero06 >= numero04 && numero06 >= numero05) {
        alert('O maior número é: ' + numero06);
    }

// ------------------------------------------------------------------------

// Exercicio 3 - Intermediário - Desconto em compras
// Objetivo: Aplicar 10% de desconto se a compra for maior ou igual a R$100

let compra = Number(prompt("Digite o valor da compra: "));
let desconto;
let valorFinal;

if(compra >= 100){
    let desconto = compra * 0.10;
    let valorFinal = compra - desconto;
    alert ("O valor da sua compra com desconto é: " + valorFinal);
} else{
    alert("Sua compra não tem desconto aplicado");
}

// ------------------------------------------------------------------------

// Exercicio 4 - Intermediário - Sistema de login simples
// Objetivo: Verificar se o usuário e senha digitados estão corretos

let usuario = "admin";
let senhaCorreta = 1234;

let login = prompt("Digite seu usuário: ");
let senha = Number(prompt("Digite sua senha: "));

if (login == usuario && senha == senhaCorreta){
    alert("Login bem-sucedido!");
} else {
    alert("Usuário ou senha incorretos ou não registrado");
}

// ------------------------------------------------------------------------

// Exercicio 1 - Avançado - Frete de pedido
// Objetivo: Definir o valor do frete com base no valor da compra

let valorCompra = Number(prompt("Digite o valor da compra para calcular o frete do pedido: "));

if(valorCompra === 100){
    alert("Frete grátis!");
} else if(valorCompra === 50){
    alert("frete de 10 reais");
} else{
    alert("frete de 20 reais");
}

// ------------------------------------------------------------------------

// Exercicio 2 - Avançado - Acesso por idade e convite
// Objetivo: Controlar entrada em um evento por idade e posse de convite

let idade = Number(prompt("Digite sua idade: "));
let temConvite = prompt("Voce tem convite? (sim/não)");

if(idade <= 17 && temConvite == "sim"){
    alert("Liberado com autorização dos pais");
} 
else if(idade >= 18){
    alert("Liberado, pode entrar!");
}
else{
    alert("Ops, infelizmente não é possivel autorizar sua entrada na festa");
}

// ------------------------------------------------------------------------

// Exercicio 3 - Avançado - Conversão de notas para conceitos
// Objetivo: Converter uma nota numérica (0-100) para conceito de letra (A, B, C, D, F)

let nota = Number(prompt("Insira a nota (0-100):"));

if(nota >= 90 && nota <= 100){
    alert("A sua nota é nível A");
} else if(nota >=80 && nota <=89){
    alert("A sua nota é nível B");
} else if(nota >=70 && nota <=79){
    alert("A sua nota é nível C");
} else if(nota >=60 && nota <= 69){
    alert("A sua nota é nível D");
} else{
    alert("A sua nota é nivel F");
}

// ------------------------------------------------------------------------

// Exercicio 4 - Avançado - Cálculo de IMC
// Objetivo: Calcular o IMC e classificar o resultado

let peso = Number(prompt("Digite seu peso:"));
let altura = Number(prompt("Digite sua altura:"));

let IMC = (peso / altura ** 2);

if(IMC <= 18.5){
    alert("Segundo o IMC seu índice de Massa Corporal está quassificado como: Abaixo do peso");
} else if(IMC >= 18.6 && IMC <= 24.99){
    alert("Segundo o IMC seu índice de Massa Corporal está quassificado como: Normal");
} else if(IMC >= 25 && IMC <= 25.99){
    alert("Segundo o IMC seu índice de Massa Corporal está quassificado como: Sobrepeso");
} else{
    alert("Segundo o IMC seu índice de Massa Corporal está quassificado como: Obesidade");
}

// ------------------------------------------------------------------------

// Exercicio 5 - Avançado - Verificação de estoque
// Objetivo: Informar a disponibilidade de um produto com base no estoque

let estoque = Number(prompt("Digite o valor do estoque:"));

if(estoque > 10){
    alert("Produto disponível");
} else if(estoque >= 1 && estoque <= 10){
    alert("Últimas unidades");
} else{
    alert("Esgotado");
}

// ------------------------------------------------------------------------