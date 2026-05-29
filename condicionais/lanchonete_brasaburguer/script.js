// variaveis
let cliente;
let produto;
let precoUnitario;
let quantidade;
let totalCompra;

// nome da lanchonete
const shopName = "Brasa Burguer";
console.log(`===== ${shopName} =====`);

// nome do cliente
cliente = prompt("Digite seu nome:");
console.log(`Cliente: ${cliente}`);

// nomes dos produtos
produto = prompt("Digite seu pedido (X-Bacon, X-Salada e X-Tudo): ");
console.log(`Produto: ${produto}`);

// preços dos produtos
if(produto == "X-Salada"){
    precoUnitario = 20;
    console.log(`Valor: R$${precoUnitario}`);
} else if(produto == "X-Bacon"){
    precoUnitario = 25;
    console.log(`Valor: R$${precoUnitario}`);
} else if(produto == "X-Tudo"){
    precoUnitario = 30;
    console.log(`Valor: R$${precoUnitario}`);
} else {
    console.log("Produto não encontrado!");
}

// quantidade de pedidos
quantidade = Number(prompt("Digite a quantidade desejada: "));

// valor total do pedido
totalCompra = precoUnitario * quantidade;
console.log (`Total da compra: R$${totalCompra}`);

// mesagem final do pedido
console.log("Pedido realizado com sucesso. Obrigado pela preferência!");