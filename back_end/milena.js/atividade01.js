const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,   
  output: process.stdout  
});

console.log("Olá, bem-vindo ao Encontre o tesouro!");
console.log("A sua aventura começa aqui!");
rl.question ('Escolha o nome do seu personagem:',(personagem)=>{

const nomes = String.valueOf(personagem)

let vida = 100;
let moedas = 50;
let nivel = 1;

console.log("\nNome:",personagem);
console.log("Vida:",vida);
console.log("Moedas:",moedas);
console.log("Nível:",nivel);

agora: moedas = 51
console.log("\nParabéns, você acabou de ganhar mais uma moeda");
console.log(`Agora você tem: ${moedas} moedas`);

console.log("\nNome:",personagem);
console.log("Vida:",vida);
console.log("Moedas:",moedas);
console.log("Nível:",nivel);


});
