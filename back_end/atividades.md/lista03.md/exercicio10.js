const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

rl.question('Digite o número que você quer começar a contagem:\n',(num1)=>{
        
        const n1 = parseFloat(num1);

for (let i = n1; i < 0; i-=50) {
    console.log(`Contagem: ${i}`);
}
});
