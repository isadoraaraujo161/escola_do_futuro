const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Digite a primeira nota: ", (num1) => {
  rl.question("Digite a segunda nota: ", (num2) => {
    rl.question("Digite a terceira nota: ", (num3) => {
      
      
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      const n3 = parseFloat(num3);

      const media = (n1n + n2 + n3) / 3;

      const aprovado = [media].filter(nota => nota >= 7);

      console.log("\nMédia:", media.toFixed(2));

      if (aprovado.length > 0) {
        console.log("Aluno aprovado");
      } else {
        console.log("Aluno reprovado");
      }

      rl.close();
    });
  });
});
