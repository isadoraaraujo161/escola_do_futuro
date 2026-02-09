const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para começar a contagem regressiva: ', (num1) => {

  const n1 = parseFloat(num1);

  let resultado = "";

  for (let i = n1; i >= 1; i--) {
    if (i % 4 === 0) {
      resultado += `[${i}] `;
    } else {
      resultado += i + " ";
    }
  }

  console.log(`\n Contagem: ${resultado}`);
  rl.close();
});
