const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
 
console.log("Escolha o tamanho da pizza:");
console.log("1-Pequena");
console.log("2-Média");
console.log("3-Grande")
rl.question("Digite a sua opção:",(numero)=> {
    
   numero = Number(numero);

    switch(numero){

    case 1: console.log("Você escolheu a pizza pequena");
    break;

    case 2: 
        console.log("Você escolheu a pizza média");
    break;
    
    case 3:
        console.log("Você escolheu a pizza grande");
    break;
    }
    });
