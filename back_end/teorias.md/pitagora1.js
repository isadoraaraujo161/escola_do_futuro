const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

    rl.question ('\nDigite o valor do cateto A:',(a)=>{
    rl.question('\nDigite o valordo cateto B:',(b)=>{
        
            
             const catetoA = parseFloat(a);
             const catetoB = parseFloat(b);
            
             
          const somaDosQuadrados = Math.pow(catetoA, 2) + Math.pow(catetoB, 2);


           const hipotenusa = Math.sqrt(somaDosQuadrados);


          console.log(`A hipotenusa para os catetos ${catetoA} e ${catetoB} é: ${hipotenusa}`);
      
       });
    });
