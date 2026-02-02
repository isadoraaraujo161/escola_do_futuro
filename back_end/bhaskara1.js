const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

    rl.question ('\nDigite o valor A:',(a)=>{
    rl.question('\nDigite o valor B:',(b)=>{
        rl.question('\nDigite o valor C:',(c)=>{
            
             const n1 = parseFloat(a);
             const n2 = parseFloat(b);
             const n3 = parseFloat(c);
             
             
             const delta = Math.pow(b, 2) - (4 * a * c);


     if (delta < 0) {
    
     console.log("\nA equação não possui raízes reais.");
} else {
    
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    
   
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    
    console.log(`\nAs raízes são: x1 = ${x1} e x2 = ${x2}`);
}
         
            
        })
   });
});
