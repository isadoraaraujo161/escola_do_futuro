const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let senha;
rl.question("Digite a senha:" , (senha) => {

    if(senha == 1234 ){
          console.log("Acesso permitido ");
    }
    else{
        console.log(" Acesso negado");
    }

   
});
