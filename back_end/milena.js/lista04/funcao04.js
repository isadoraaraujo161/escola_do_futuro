const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

 function somar(soma, primeironumero, segundonumero){
        return console.log(`Soma = ${primeironumero} + ${segundonumero} = ${soma}`);
    }

    rl.question("Digite o valor do primeiro número:",(primeironumero)=>{
        rl.question("Digite o valor do segundo número:",(segundonumero)=>{
            
            primeironumero = Number(primeironumero)
            segundonumero = Number(segundonumero)

             let soma = primeironumero + segundonumero

           somar(soma, primeironumero, segundonumero);
        });
    });
     
