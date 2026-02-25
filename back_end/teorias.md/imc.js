const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});

    rl.question ('\nDigite o seu peso:',(a)=>{
    rl.question('\nDigite a sua altura:',(b)=>{
        
            
             const peso = parseFloat(a);
             const altura = parseFloat(b);
             
             

      const imc = peso / Math.pow(altura, 2);


      console.log(`Seu IMC é: ${imc.toFixed(2)}`);


      if (imc < 18.5) {
          
    console.log("Classificação: Abaixo do peso");
    } else if (imc < 25) {
   
    console.log("Classificação: Peso normal");
} else {
   
    console.log("Classificação: Sobrepeso");
}
});
});
