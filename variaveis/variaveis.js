
// // VARIAVEIS - DECLARAÇÃO DE VARIAVEIS

// LET -> QUANDO O VALOR DA VARIAVEL PODE MUDAR AS COISAS, USAMOS let (FLEXIVEL)
// CONST -> QUANDO O VALOR DA VARIAVEL É COSNTANTE NÃO PODE MUDAR, USAMOS const (RIGIDO)
// VAR -> (NÃO RECOMENDADO PARA VARIAVEIS) PODE CAUSAR CONFUSÃO NO CODIGO, TEM UMA FORMA ANTIGA E ESTA SENDO DESCONTINADO POR MUITOS PROBLEMAS

// let nome = "Caio";
// const idade = 25;
// var cidade = "São Paulo";

// usamos console.log() imprimir valores na tela o valor
// console.log(nome);
// console.log(idade);

// TROCANDO AS INFORMAÇÕES DA VARIAVEL COM let
// nome = "Giovanni";
// console.log(nome);

// TROCANDO AS INFORMAÇÕES DA VARIAVEL COM const
// idade = 30;
// console.log(idade);

// IMPRIMINDO OS VALORES JUNTOS
// console.log(nome + cidade);

// IMPRIMINDO OS VALORES JUNTOS
// CONCATENAÇÃO
// console.log("Nome: " + nome + ", cidade: " + cidade);

// INTERPOLAÇÃO - ${}
// console.log(`Nome: ${nome}, Cidade: ${cidade}`);

// --------------------------------------------------------------------

// TIPOS PRIMITIVOS
// STRING (TEXTO)
// let mensagem = "Ola,mundo!";
// console.log(typeof mensagem);

// // NUMBER (NUMERO)
// let idade = 30;
// let temperatura = 36.5;
// console.log(typeof idade);
// console.log(typeof temperatura);

// BOOLEAN (BOOLEANO -> VERDADEIRO E FALSO)
// let estaChovendo = true;
// console.log(typeof estaChovendo);

// UNDEFINED - QUANDO NÃO DEFINIMOS UM VALOR PARA UMA VARIAVEL
// let nome;
// console.log(typeof nome);

// NULL - USADO PARA AUSENCIA PROPOSITAL DE UM VALOR
// let endereco = null;
// console.log(typeof endereco);

// --------------------------------------------------------------------

// CONVERSÃO DOS TIPOS
// (IMPLICITA AUTOMATICA)
// let soma = "5" + 3;
// let sub = "5" - 3;
// console.log(typeof soma)
// console.log(soma) //53 string
// console.log(typeof sub)
// console.log(sub) // 2 number

// EXPLICITA
// STRING PARA NUMERO
// let numero = "42";
// let convertido = Number(numero);

// CONVERTER NUMERO PARA STRING
// let numero1 = "100";
// let texto = String(numero1);

// --------------------------------------------------------------------

// OPERADORES RELACIONAIS
/*
    >    MAIOR QUE
    <    MENOR QUE
    >=   MAIOR OU IGUAL
    <=   MENOR OU IGUAL

    ==   IGUALDADE (IGNORA TIPO)
    ===  IGUALDADE ESTRITA (VERIFICAR TIPO)

    !=   DIFERENTE (IGNORA TIPO)
    !==  DIFERENTE ESTRITO (VERIFICA TIPO)
*/

// EXEMPLO
// console.log(10 > 5); // true
// console.log(10 < 5); // false

// console.log(5 == "5"); // true
// console.log(5 === "5"); // false -> compara valor e tipo

// --------------------------------------------------------------------

//  OPERADORES MATEMÁTICOS
/*
    +  SOMA
    -  SUBTRAÇÃO
    *  MULTIPLICAÇÃO
    /  DIVISÃO
    %  RESTO DA DIVISÃO
    ** POTENCIA
*/

// EXEMPLO
// let a = 10;
// let b = 5;

// console.log(a + b); // soma
// console.log(a - b); // subtração
// console.log(a * b); // multiplicação
// console.log(a / b); // divisão
// console.log(a % b); // resto da divisão
// console.log(a ** b); // potencia

// --------------------------------------------------------------------

// OPERADORES LOGICOS - VALIDAR VARIAS EXPRESSÕES JUNTAS
/*
    && (AND) - OPERADOR E: 
    || (OR) - OPERADOR OU
    ! (NOT) - OPERADOR NÃO
*/

// OPERADOR - &&
// APENAS RETORNA VERDADEIRO QUANDO TODAS AS CONDIÇÕES FOREM VERDADEIRAS

// let num1 = 5
// let num2 = 5
// let num3 = 10
// console.log(num1 == num2 && num3 > num2); // true

// OPERADOR - ||
// RETORNA VERDADEIRO E PELO MENOS UMA DAS CONDIÇÕES FOREM VERDADEIRAS
// let num4 = 9
// console.log(num1 == num4 || num1 == num2);

// OPERADOR NEGAÇÃO - !
// IVERNTE A CONDIÇÃO, SE É VERDADEIRO VIRA FALSO E VISE VERSA

// let logado = false; // logado é falso
// console.log(!logado); // porem o ! inverte essa operação para verdadeiro
// let logado1 = true; // logado é verdadeiro
// console.log(!logado); // porem o ! inverte essa operação para falso
// console.log(5 != 3); // true
// console.log(!(5 != 3)); // false

// --------------------------------------------------------------------

// ARRAY (LISTA) - SEMPRE COMEÇA NA POSIÇÃO 0
// let frutas = ["maça", "banana", "uva"];
// console.log(frutas);

// ACESSANDO A POSIÇÃO DO ITEM NUMA LISTA
// console.log(frutas[1]);

// IMPRIMIR O TAMANHO DA LISTA
// console.log(frutas.length);


// OBJETOS - TODAS ESSAS INFORMAÇÕES SE REFEREM A ESSA "PESSOA" / CHAVE(NOME) E VALOR(GIOVANNI)
// let pessoa = {
//     nome: "Giovanni",
//     idade: "25"
// };

// let pessoa = [
//     {
//         nome: "Giovanni",
//         idade: "20"
//     }
//     {
//         nome: "Giovanna",
//         idade: "25"
//     }
// ];
// IMPRIMI A PESSOA COMPLETA
// console.log(pessoa);

// IMPRIMI SOMENTE A PROPRIEDADE UNICAMENTE DA PESSOA
// console.log(pessoa.nome);
// console.log(pessoa.idade);

// RECEBENDO DADOS DO USUARIO
// let nome = prompt("Digite seu nome: ");
// alert(`Olá, ${nome}`);

// function mensagem(){
//     alert(`Olá. seja bem vindo(a)!`);
// }