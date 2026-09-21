const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

 function mostrardados(nome, idade){
        return console.log(`${nome} tem ${idade} anos`);
    }

rl.question("Digite seu nome:",(nome)=>{
    rl.question("Digite a sua idade",(idade)=>{
        idade = Number(idade)
    mostrardados(nome,idade);
    });
});

