const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite a nota de um aluno:" , (nota) => {
    
   const nota1 = parseFloat(nota);

    if(nota1 >= 9 && 10 ){
          console.log("Nota excelente");
    }
    else if(nota1 >= 7 && nota1 <= 8.9){
        console.log("Nota Boa");
    }
    else if(nota1 >= 5 && nota1 <= 6.9){
        console.log("Nota regular");
    }
    else if (nota1 >= 0 && nota1 <= 4.9){
        console.log("Nota insuficiente");
    }

});


