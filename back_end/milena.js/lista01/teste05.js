const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nome;
let cidade;
let transporte;
let dias


rl.question("Qual e o seu nome?" , (nome) => {
   rl.question("Qual será a cidade de destino?" , (cidade) => {
      rl.question("Qual será o meio de transporte?" , (transporte) => {
       rl.question("Quantos dias você vai ficar?" , (dias) => {

   console.log ("=====VIAGEM=====");
   console.log(`Viajante: ${nome}`);
    console.log(`Destino: ${cidade}`);
    console.log(`Transporte: ${transporte}`);
    console.log(`Dias: ${dias}`);
    console.log ("================");
    console.log("Boa viagem!")
    

});
});
});
});
