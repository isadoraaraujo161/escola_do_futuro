const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

 function calcularMedia(primeironota, segundonota){
         let media = (primeironota + segundonota) /2 
         return console.log(`Média = ${primeironota} + ${segundonota} /2 = ${media}`);
    }

    rl.question("Digite o valor da primeira nota:",(primeironota)=>{
        rl.question("Digite o valor da segunda nota:",(segundonota)=>{
            
            primeironota = Number(primeironota)
            segundonota = Number(segundonota)

           calcularMedia(primeironota, segundonota);
        });
    });
     
