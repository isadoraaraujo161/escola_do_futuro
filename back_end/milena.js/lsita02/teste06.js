const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o seu nome:" , (nome) => {
    rl.question("Digite o valor do saldo disponível:",(saldo)=>{
      rl.question("Digiteo valor do saque:", (saque)=>{

   saldo = Number(saldo);
   saque = Number(saque);
   let novo = saldo - saque 

    if(saque > saldo ){
          console.log("Saldo insuficiente");
    }
    else if(saque < saldo){
        console.log("Saque aprovado");
        console.log(`o seu novo saldo e ${novo}`);
    }
    else{
        console.log("refaça novamente, por favor");
    }

    });
   });
});


