const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let compra;
rl.question("Digite o valor da compra:" , (compra) => {

    if(compra >= 100 ){
          console.log("Parabéns! Você ganhou frente grátis!! ");
    }
    else if(compra < 100){
        console.log("O frente será cobrado");
    }
    else{
        console.log("Valor não encontrada, por favor faça novamente");
    }

   
});
