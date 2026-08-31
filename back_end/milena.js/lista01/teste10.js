const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Qual seu nome?" , (nome) => {
   rl.question("Digite a quantidade de pontos da primeira partida:" , (pontos) => {
      rl.question("Digite a quantidade de pontos da segunda partida:" , (bonus) => {


        pontos = Number(pontos);
        bonus = Number(bonus);

        const pontuacaofinal = pontos + bonus



  
   console.log(`Nome: ${nome}`);
    console.log(`Pontos da fase: ${pontos}`);
    console.log(`pontos bônus: ${bonus}`);
    console.log ("=======Resultado=========");
    console.log(`Jogador: ${nome}`);
    console.log(`Pontuação final: ${pontuacaofinal}`);
    
    if(pontuacaofinal > 100){
        console.log("A pontuação final e maior que 100 pontos");
    }
    
    else if(pontuacaofinal == 100){
        console.log("A pontuação final e igual e 100 pontos");
    }
    else{
        console.log("A pontuação final foi menor que 100 pontos");
    }
 
});
});
});
