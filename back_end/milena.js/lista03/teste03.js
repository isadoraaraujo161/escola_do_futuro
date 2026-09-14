const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  rl.question("Digite o valor da nota do aluno:",(nota)=>{
 
   nota = Number(nota);

    let resultado = nota >= 6? "Aprovando":"Reprovando";
    console.log(`O aluno foi ${resultado}`);



  });
