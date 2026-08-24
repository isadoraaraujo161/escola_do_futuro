const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Qual seu nome?" , (nome) => {
   rl.question("Digite a quantidade de pontos conquistados na última fase:" , (pontos) => {
      rl.question("Digite a quantidade de pontos bônus?" , (bonus) => {


        pontos = Number(pontos);
        bonus = Number(bonus);

        const pontuacaofinal = pontos + bonus



  
   console.log(`Nome: ${nome}`);
    console.log(`Pontos da fase: ${pontos}`);
    console.log(`pontos bônus: ${bonus}`);
    console.log ("=======Resultado=========");
    console.log(`Jogador: ${nome}`);
    console.log(`Pontuação final: ${pontuacaofinal}`);
    

});
});
});
