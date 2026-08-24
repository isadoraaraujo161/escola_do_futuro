const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o nome do jogo:" , (nome) => {
   rl.question("Digite o preço do jogo:" , (preco) => {
      rl.question("Digite a quantidade que foram comprada:" , (quantidade) => {


        preco = Number(preco);
        quantidade = Number(quantidade);

        const pontuacaofinal = preco * quantidade;



  
   console.log(`Nome do jogo: ${nome}`);
    console.log(`Valor do jogo: ${preco}`);
    console.log(`Quantidade comprada: ${quantidade}`);
    console.log ("=======Resultado=========");
    console.log(`Total da compra: R$${pontuacaofinal}`);

    

});
});
});
