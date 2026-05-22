
// Exercício 1 - Básico - Lista numerada

// const nomes = ["Giovanni", "Amanda", "Gustavo", "Felipe", "Davi"]

// nomes.forEach((nomes, index) => {
//     console.log(`${index} - ${nomes}`);
// });

// --------------------------------------------------------------------

// Exercício 2 - Básico - Exibir posições

// const cores = ["Azul", "Amamrelo", "Vermelho", "Verde"]

// cores.forEach((cores, index) => {
//     console.log(`A cor ${cores} está na posição: ${index}`);
// });

// --------------------------------------------------------------------

// Exercício 3 - Básico - Primeiro e último

// const marcas = ["Adidas", "Puma", "Rolex", "Dell", "Duracell"]

// console.log(marcas[0]);
// console.log(marcas[marcas.length - 1]);

// --------------------------------------------------------------------

// Exercício 4 - Básico - Contagem de itens

// const frutas = ["Maçã", " Banana", " Uva", " Manga", " Pera"]

// console.log(`O array tem ${frutas.length} frutas, e elas são: ${frutas} `);

// --------------------------------------------------------------------

// Exercício 1 - Intermediário - Filtrar por posição

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.forEach((numeros, index) => {
//     if(numeros % 2 === 0){
//         console.log(`Posição ${index}: ${numeros}`);
//     }
// });

// --------------------------------------------------------------------

// Exercício 2 - Intermediário - Destacar item específico

// const nomes = ["Giovanni", " Amanda", " Gustavo", " Felipe", " Davi"]

// nomes.forEach((nome, index) => {
//     if(index === 2){
//         console.log(`Nome especial: ${nome}`);
//     }
// });

// --------------------------------------------------------------------

// Exercício 3 - Intermediário - Transformar com índice

const numeros = [10, 20, 30, 40, 50,]

const resultados = numeros.map((numero, index) => {
      return(`${index + 1}º número: ${numero}`);
});

console.log(resultado);