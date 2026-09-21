const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

 function saudaraluno(nome){
        return console.log(`Olá ${nome}! Seja bem-vindo(a)`);
    }

rl.question("Digite seu nome:",(nome)=>{
    saudaraluno(nome);
});

