const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

rl.question('Digite um número para começar a contagem regressiva:',(num1)=>{
        
        const n1 = parseFloat(num1);

let resultado = [];

for (let i = n1; i >= 1; i--) {
  if (i % 4 === 0) {
    resultado.push(`[${i}]`);
  } else {
    resultado.push(i);
  }
}

console.log(resultado.join(" "));

});
