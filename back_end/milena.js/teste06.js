const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nome;
let classe;
let poder;
let cidade
let item


rl.question("Qual será o nome do seu personagem?" , (nome) => {
   rl.question("Qual será a classe desse personagem" , (classe) => {
      rl.question("Qual será o poder?" , (poder) => {
       rl.question("Qual cidade ele nasceu?" , (cidade) => {
        rl.question("Qual será o item dele favorito?" , (item) => {

   console.log ("================");
   console.log ("  Personagem  ");
   console.log(`Nome: ${nome}`);
    console.log(`Classe: ${classe}`);
    console.log(`Poder: ${poder}`);
    console.log(`Cidade de origem: ${cidade}`);
    console.log(`Item favorito: ${item}`);
    console.log ("================");
    
    

});
});
});
});
});
