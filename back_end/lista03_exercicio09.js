const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite o segundo número: ", (num2) => {
    rl.question("Digite o terceiro número: ", (num3) => {
      
      
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      const n3 = parseFloat(num3);

     resultando = n1 + n2 + n3;
      
     console.log(`\nResultado:${resultando}`);


    });
  });
});
