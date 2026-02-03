
const readline = require('readline').createInterface({
    input: process.stdin,  
    output: process.stdout  
});


const pergunta = (texto) => new Promise((resolve) => readline.question(texto, resolve));


async function calcularPitagoras() {
    console.log("--- Calculadora de Hipotenusa ---");
    
     const entradaA = await pergunta("Digite o valor do Cateto A: ");
    const entradaB = await pergunta("Digite o valor do Cateto B: ");
    
    const a = parseFloat(entradaA);
    const b = parseFloat(entradaB);
    
    if (isNaN(a) || isNaN(b)) {
        console.log("Erro: Por favor, insira apenas valores numéricos.");
    } else {
        
            const hipotenusa = Math.hypot(a, b);

   console.log(`\nCom catetos ${a} e ${b}, a hipotenusa é: ${hipotenusa.toFixed(2)}`);
    }
    
     readline.close();
}

calcularPitagoras();
