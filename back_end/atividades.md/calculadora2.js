const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

console.log("--- Calculadora Node.js ---");
rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o operador (+, -, *, /, sqrt, sin, cos, ^, %): ', (operador) => {
    rl.question('Digite o segundo número: ', (num2) => {

      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      let resultado;

      switch (operador) {
        case '+':
          resultado = n1 + n2;
          break;

        case '-':
          resultado = n1 - n2;
          break;

        case '*':
          resultado = n1 * n2;
          break;

        case '/':
          resultado = n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero!";
          break;
          
        case 'sqrt':
          resultado = Math.sqrt(n1,n2);
          break;
          
        case '^':
          resultado = Math.pow(n1,n2);
          break;
          
        case 'sin':
          resultado = Math.sin(n1,n2);
          break;
          
        case 'cos':
          resultado = Math.cos(n1,n2);
         break;
         
    
        default:
          resultado = "Operador inválido!";
      }
      console.log(`\n> Resultado: ${n1} ${operador} ${n2} = ${resultado}`);
      rl.close();
    });
  });
});
