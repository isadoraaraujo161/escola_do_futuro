const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Qual seu nome?" , (nome) => {
   rl.question("Digite o valor que você tem guardado:" , (guardado) => {
      rl.question("Digite o valor em que você pretende guarda:" , (guarda) => {


        guardado = Number(guardado);
        guarda = Number(guarda);

        const pontuacaofinal = guardado + guarda



  
   console.log(`Nome: ${nome}`);
    console.log(`Valor guardado: ${guardado}`);
    console.log(`Valor que vai guarda: ${guarda}`);
    console.log ("=======Resultado=========");
    console.log(`${nome} terá R$${pontuacaofinal} no confrinho`);

    

});
});
});
