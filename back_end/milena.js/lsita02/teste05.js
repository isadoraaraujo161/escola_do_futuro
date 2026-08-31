const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite a temperatura:" , (temperatura) => {
    
   const temperatura1 = parseFloat(temperatura);

    if(temperatura1 <= 15 ){
          console.log("Muito frio");
    }
    else if(temperatura1 > 15 && temperatura1 <= 24){
        console.log("Frio");
    }
    else if(temperatura1 >= 25 && temperatura1 <= 30){
        console.log("Agradável");
    }
    else if (temperatura1 >= 30){
        console.log("Muito quente");
    }

});


