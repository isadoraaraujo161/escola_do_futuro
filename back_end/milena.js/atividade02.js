const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,   
  output: process.stdout  
});

console.log("Olá, bem-vindo ao Encontre o tesouro!");
console.log("A sua aventura começa aqui!");
rl.question ('Escolha o nome do seu planeta:',(planeta)=>{
 const planetas = String.valueOf(planeta)
 const combustiveis = "gasolina"
 let quantidade = 1000;
console.log("Planeta:",planeta);
console.log("Tipo de combustível:",combustiveis);
console.log("Quantidade:",quantidade);

});
