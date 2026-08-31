const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
 
console.log("Escolha uma bebida");
console.log("suco");
console.log("refrigerante");
console.log("Se você quiser suco digite 1 se quiser refrigerante digite 2");

rl.question("Digite o número:",(numero)=> {
    
   numero = Number(numero);

    if(numero == 1  ){
          console.log("Você escolheu suco");
    }
    else if(numero == 2 ){
        console.log("Você escolheu refrigerante");
    }
    else{
        console.log("refaça novamente, por favor");
    }
    });
