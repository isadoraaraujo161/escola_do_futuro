const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nome;
let idade;
let cidade;

rl.question("QUal e o seu nome?" , (nome) => {
   rl.question("Qual e a sua idade?" , (idade) => {
      rl.question("Qual cidade você mora?" , (cidade) => {

   console.log(`Olá, ${nome}!`);
   console.log(`Você tem ${idade} anos e mora em ${cidade}`);


});
});
});
