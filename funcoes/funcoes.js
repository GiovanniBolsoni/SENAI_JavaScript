
// Funcões nativas do Javascript
// Ajudam a manter um código limpo e organizado
// Evita muita repetição de código

// ------------------------------------------------------------------------

// MAP -> Percorre uma lista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4];

// let numerosDobrados = numeros.map(function(num){
//     return num * 2;
// });

// console.log(numerosDobrados);

// Mesma função, mas agora com "arrow function"
// let numerosDobradosArrow = numeros.map(num => num * 2);

// console.log(numerosDobradosArrow);

// let teste = numeros.map(num => {
//     let resultado = num * 2;
//     return resultado;
// })

// console.log(teste)

// ------------------------------------------------------------------------

// FILTER -> Filtra os elementos de uma lista com base em uma condição

// let numeros = [5, 10, 15, 20];

// let maiorQueDez = numeros.filter(num => num > 10);

// console.log(maiorQueDez); // retorna no console apenas o 15 e 20, pois são os únicos maiores que 10

// ------------------------------------------------------------------------

// REDUCE -> Reduz os valores de um array para um único valor - MUITO DIFICIL

// let numeros = [1, 2, 3, 4]

// Acumulador
// Variavel auxiliar
// 0 -> é o valor inicial do acumulador
// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
// console.log(soma);

// ------------------------------------------------------------------------

// FIND -> Retorna o primeiro elemento que atende a uma condição

// let produtos = [
    // {id: 1, nome: "Teclado", preco: 50},
    // {id: 2, nome: "Mouse", preco: 30},
    // {id: 2, nome: "Fone de ouvido", preco: 200}
// ]

// fazendo uma busca dentro da lista seguindo o id do item
// let item = produtos.find(produto => produto.id === 2);
// console.log(item);

// ------------------------------------------------------------------------

// SPIT -> Divide uma string em partes, transformando em uma lista

// let frase = "Js é muito bom!";

// Criando um array de palavras usando split
// let palavras = frase.split("i");
// console.log(palavras)

// ------------------------------------------------------------------------

// JOIN -> Junta os elementos de um array em uma string

// let palavras = ["JS", "é", "muito", "bom"];

// let frases = palavras.join(" ");
// console.log(frases);

// ------------------------------------------------------------------------

// TRIM -> Remove espaços no inicio e final de uma string

// let nome = "    João    ";
// let nome2 = "   João    ";
// let nomeLimpo = nome.trim();

// console.log(nomeLimpo)
// console.log(nome2)

// ------------------------------------------------------------------------

// INCLUDES -> Verifica se existe um valor dentro de uma lista ou string

// let frutas = ["maçã", "banana"];

// let frutaExiste = frutas.includes("banana"); //booleano
// console.log(frutaExiste); // true (verdadeiro)

// ------------------------------------------------------------------------

// TOLOWERCASE -> Transforma o texto em minúsculo
// TOUPPERCASE -> Transforma o texto em maiúsculo

// let nome = "Giovanni"
// let cargo = "Desenvolvedor"

// console.log(nome.toLowerCase);
// console.log(cargo.toUpperCase);

// ------------------------------------------------------------------------

// SOME -> Verifica se pelo menos um item da lista atende a condição

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0); // true ou false
// console.log(temPar); // true

// ------------------------------------------------------------------------

// EVERY -> Verifica se TODOS os elementos da lista atedem a uma condição

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); // false

// ------------------------------------------------------------------------

// SORT -> Ordena os elementos de uma lista

// let numeros = [3, 10, 5, 2, 4]
// let letras = ["c", "a", "x", "h"]

//ordenando letras
// letras.sort();
// console.log(letras);

//ordenando números
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// ------------------------------------------------------------------------

// REVERSE -> Inverte a ordem de um array

// numeros.reverse();
// console.log(numeros);

// letras.reverse();
// console.log(letras);

// ------------------------------------------------------------------------

// PUSH -> Adicionar elementos no final do array
// POP -> Remover elementos no final do array
// let lista = ["A", "B"];

// lista.push("C"); // adicionando
// console.log(lista);

// lista.pop(); // removendo
// console.log(lista);

// SHIFT -> Remover elementos do inicio do array
// UNSHIFT -> Adicionar elementos no inicio do array
// let lista = ["B", "C"]

// lista.unshift("A"); // adiciona
// console.log(lista);

// lista.shift(); // remove
// console.log(lista);

// ------------------------------------------------------------------------

// SLICE -> Cria uma cópia de uma parte da lista

/*
    array.slice(incial, final)

    inicial -> onde começa (a copiar o array)
    final -> onde para (não inclui a posição final (indice / index))
*/

// let numeros = [1, 2, 3, 4]
// let copia = numeros.slice(1, 4) // 1 e 3 são posições do array

// console.log(copia);

// ------------------------------------------------------------------------

// SPICE -> Remove ou adiciona elementos em qualquer posição

/*
    array.spice(indice, count, item1,...,itemX)

    indice -> posição de elemento no array(index)
    count -> números de itens a serem removidos (pode ser 0)
    item -> itens que vão ser adicionados
*/

// 1. ex:
// let numeros = [1, 2, 3, 4]

// numeros.splice(1, 1); // !! (indice, quantidade, itens add) !!
// console.log(numeros);

// 2. ex:
// let frutas = ["Banana", "Laranja", "Maça", "Manga"]

// frutas.splice(0, 3, "limão", "kiwi");
// console.log(frutas);

// 3. ex:
// let frutas = ["Banana", "Laranja", "Maça", "Manga"]

// frutas.splice(2, 0, "Limão", "Kiwi");
// console.log(frutas);

// ------------------------------------------------------------------------

// REPLACE -> Substitui uma parte da string

// let texto = "Olá Mundo!";

// Replace !! (valorProcurado, valorSubstituto) !!
// let novoTexto = texto.replace("Mundo", "cliente");
// console.log(novoTexto);

// ------------------------------------------------------------------------

// IF Ternário
// se for / verdadeiro -> a resposta vem depois da "?" 
// se (não) / falso -> a resposta vem depois dos ":"
// se depois dos dois pontos tiver outra condição, voltamos para o começo
// let resposta = (idade > 18) ? "maior de idade" : "menor de idade";

// let resposta2 = (idade > 18) ? "maior de idade" : (idade > 75) ? "idoso" : "menor de idade"

// ------------------------------------------------------------------------

// let textoP = document.getElementById("texto");

// let saudacao = prompt("Digite uma saldação:");

// // textContent -> conteudo do texto
// textoP.textContent = saudacao == "bom dia" ? saudacao : "Quintou!";