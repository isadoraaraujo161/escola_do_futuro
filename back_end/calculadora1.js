// Importa o módulo readline, usado para ler dados do teclado no terminal
const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

console.log ("---CALCULADORA---\n")
rl.question ('\nDigite o primeiro número:',(num1)=>{
    rl.question('\nDigite o segundo número:',(num2)=>{
     rl.question('Digite a operação em que você deseja entre essas (+,-,*,/):\n',(operdor)=>{
   
 
         const n1 = parseFloat (num1);
         const n2 = parseFloat(num2);
         
         let resultado
         switch (operador) {
             case '+':
                 resultado = n1 + n2;
                 break;
             
             case '-':
                 resultado = n1 - n2;
                 break;
             case '*'
                 resultado = n1 * n2;
                 break;
                 
             case '/'
                 resultado = n1 / n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero!";
               
                 break;
             default:
                 resultado = "operador inválido!";
             }
                 
     console.log (`RESULTADO: ${n1} ${operador} ${n2} = ${resultado}`);
       
     
               
    });
  });
});
