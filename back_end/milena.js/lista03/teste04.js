const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  rl.question("Digite o valor do produto:",(valor)=>{
    rl.question("Digite o valor do dinheiro disponível:",(saldo)=>{
 
   valor = Number(valor);
   saldo = Number(saldo);
    let resultado = saldo >= valor? "Compra realizada":"Saldo insuficiente";
    console.log(`${resultado}`);



  });
});
