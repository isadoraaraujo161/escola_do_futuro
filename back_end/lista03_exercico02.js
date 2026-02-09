const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

rl.question('Digite o número que você quer começar a contagem:\n',(num1)=>{
    rl.question ('Digite o número que você queira terminar a contagem:\n',(num2)=>{
        
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

for (let i = n1; i < n2; i--) {
    console.log(`Contagem: ${i}`);
}
});
});
