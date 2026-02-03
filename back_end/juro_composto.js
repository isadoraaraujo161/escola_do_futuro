const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

    rl.question ('\nDigite o tempo:',(a)=>{
    rl.question('\nDigite a capital:',(b)=>{
        rl.question('\nDigite a taxa:',(c)=>{
            
            
             const tempo = parseFloat(a);
             const capital = parseFloat(b);
             const taxa = parseFloat(c);
            
            const montante = capital * Math.pow((1 + taxa), tempo);


console.log(`Valor inicial: R$ ${capital}`);


console.log(`Montante final após ${tempo} meses: R$ ${montante.toFixed(2)}`);


console.log(`Lucro apenas em juros: R$ ${(montante - capital).toFixed(2)}`);

});
});
});
