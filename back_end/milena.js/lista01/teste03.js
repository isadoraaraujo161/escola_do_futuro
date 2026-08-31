const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nome;
let curso;
let materia;
let turno;

rl.question("Qual e o seu nome?" , (nome) => {
   rl.question("Qual curso você faz?" , (curso) => {
      rl.question("Qual matéria você faz?" , (materia) => {
        rl.question("Em qual turno você estuda?" , (turno) => {

   console.log ("=====PERFIl=====");
   console.log(`Nome: ${nome}`);
    console.log(`Curso: ${curso}`);
    console.log(`Matéria: ${materia}`);
   console.log(`Turno: ${turno}`);


});
});
});
});
