const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite um número" ,(numero1)=>{
  rl.question("Digite um segundo número",(numero2)=>{
  
     numero1 = Number(numero1);
     numero2 = Number(numero2);

     soma = numero1 + numero2
     subtracao = numero1 - numero2
     multiplicacao = numero1 * numero2
     divisao = numero1/numero2

    console.log(`soma: ${soma}`);
    console.log(`subtração: ${subtracao}`);
    console.log(`multiplicação: ${multiplicacao}`);
    console.log(`divisão: ${divisao}`);

    if(numero1 > numero2){
         console.log("O primeiro número e maior que o segundo");
    }
    else if(numero1 == numero2){
        console.log("O primeiro número e igual ao o segundo");
    }
    else{
        console.log("O primeiro número e menor que o segundo");
    }
    if(soma > 10){
        console.log("Os dois números e maior que 10");
    }
    else if(numero1 >100 || numero2 >100){
        console.log("Um dos dois número e maior que 100");
    }

  });
});
