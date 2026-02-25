const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

rl.question('Digite um número inteiro positivo:\n',(num1)=>{
        
        const n1 = parseFloat(num1);

for (let i = 0; i < n1; i++) {
    console.log(`Contagem: ${i}`);
}
    console.log ('Acabou!');
});
