const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o nome do produto:" , (nome) => {
   rl.question("Digite o preço do produto:" , (preco) => {
      rl.question("Digite a quantidade dde produtos:" , (quantidade) => {


        preco = Number(preco);
        quantidade = Number(quantidade);

        const valordacompra = preco * quantidade



  
   console.log(`Nome: ${nome}`);
    console.log(`Preço do produto: ${preco}`);
    console.log(`Quantidade de produtos: ${quantidade}`);
    console.log ("=======Resultado=========");
    console.log(`Valor da compra: ${valordacompra}`);
    
    if(valordacompra > 100){
        console.log("O valor da compra foi maior que 100 reais");
    }
    
    else if(valordacompra == 100){
        console.log("O valor da compra foi igual 100 reais");
    }
    else{
        console.log("O valor da compra foi menor que 100 reais");
    }
    if(quantidade >2){
        console.log("A quantidade de produtos foi maior que dois");
      }
    else if(quantidade == 2){
        console.log("A quantidade de produtos foi igual a dois");
    }
    else{
        console.log("A quantidade de produtos foi menor que dois");
    }

    if(valordacompra> 20){
        console.log("o Preço foi maior que vinte");
    }
    else if(valordacompra ==20){
       console.log("o Preço foi igual que vinte");
    }
    else{
        console.log("o Preço foi menor que vinte");
    }
 
});
});
});
