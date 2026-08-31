const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nome;
let tamanho;
let bebida;


rl.question("Qual e o seu nome do seu pedido?" , (nome) => {
   rl.question("Qual será o tamanho do lanche" , (tamanho) => {
      rl.question("Você vai querer bebida" , (bebida) => {
       

   console.log ("=====PERFIl=====");
   console.log(`Lanche: ${nome}`);
    console.log(`Tamanho: ${tamanho}`);
    console.log(`Bebida: ${bebida}`);
    console.log ("================");
    console.log("Pedido registrado!")
    console.log("Muito obrigada!!")

});
});
});
