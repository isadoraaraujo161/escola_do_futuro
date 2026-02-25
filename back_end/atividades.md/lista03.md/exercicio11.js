const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Digite o primeiro:", (num1) => {
  rl.question("Digite o segundo:", (num2) => {
    rl.question("Digite o terceiro:", (num3) => {
       rl.question("Digite o quarto:", (num4) => {
         rl.question("Digite o quito:", (num5) => {
           rl.question("Digite o sexto:", (num6) => {
             rl.question("Digite o sétimo:", (num7) => {
      
      
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      const n3 = parseFloat(num3);
      const n4 = parseFloat(num4);
      const n5 = parseFloat(num5);
      const n6 = parseFloat(num6);
      const n7 = parseFloat(num7);

      const soma = n1 + n2 + n3 + n4 + n5 + n6 + n7;
      
    console.log(`\nSoma:${soma}`);

      rl.close();
        
            }); 
          });
         });
       });
    });
  });
});
