const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

rl.question('Digite o número que você quer começar a contagem:\n',(num1)=>{
    rl.question ('Digite o número que você queira terminar a contagem:\n',(num2)=>{

let energia = num1;

while (energia > num2) {
    console.log(`Trabalhando... Energia restante: ${energia}`);
    energia--; 
}
});
});
