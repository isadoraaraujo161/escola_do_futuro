const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

    rl.question ('\nDigite o tempo:',(a)=>{
    rl.question('\nDigite a capital:',(b)=>{
        rl.question('\nDigite a taxa:',(c)=>{
            
             
             const n1 = parseFloat(a);
             const n2 = parseFloat(b);
             const n3 = parseFloat(c);
            
            const juros = n2 * n3 * n1;

            const total = n2 + juros;

            console.log(`Juros: R$${juros} | Total após 1 ano: R$${total}`);
            
        });
   });
});
