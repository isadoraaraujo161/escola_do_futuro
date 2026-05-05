const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,   // Entrada: teclado
  output: process.stdout  // Saída: terminal
});


rl.question('Digite o seu nome:\n',(nome1)=>{
rl.question('Digite o seu telefone:\n',(telefone1)=>{
rl.question('Digite a sua idade:\n ',(idade1)=>{
rl.question('Digite a sua endereço: \n',(endereco1)=>{
    

const nome = "nome1"
const telefone = "telefone1"
const idade = "idade1"
const endereco = "endereco1"

console.log("Sistema Básico de Comunicação\n");
console.log(`Nome:\n ${nome1}`);
console.log(`Telefone:\n ${telefone1}`);
console.log(`Idade:\n ${idade1}`);
console.log(`Endereço:\n ${endereco1}`);

console.log("Verificação da Carteira\n");
if(idade1<18){
   console.log("Você ainda não poderá tirar a carteira");
}
else if(idade1>=18){
    console.log("Parabéns, você já pode tirar a cateira");
}
else{
    console.log("Desculpa, idade não identificada. Por favor voltar ao início");
  return;
}
 rl.close(); 
});
});
});
});
