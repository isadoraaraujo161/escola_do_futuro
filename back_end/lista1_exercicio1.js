const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

rl.question('Digite um número:\n',(num1)=>{

for (let i = num1; i < 5; i++) {
    console.log(`Contagem: ${i}`);
}
});
