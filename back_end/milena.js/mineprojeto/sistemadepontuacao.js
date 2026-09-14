const console = require("console");
const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
rl.question("Digite o seu nome:",(nome)=>{
    rl.question("Digite a sua idade:",(idade)=>{
     idade = Number(idade);

  console.log("===PONTUAÇÂO===");
  rl.question("Digite a pontuação da primeira fase:",(primeira)=>{
   rl.question("Digite a pontuação da segunda fase:",(segunda)=>{
   primeira = Number(primeira);
   segunda = Number(segunda);
   let total = primeira + segunda;

   console.log("===ESCOLHA SEU PERSONAGEM===");
   console.log("1-Guerreiro");
   console.log("2-Mago");
   console.log("3-Arqueiro");
   rl.question("Digite a sua opção:",(opcao) => {
    opcao = Number(opcao);
    let personagem 
      switch(opcao){
        case 1: personagem = "guerreiro"
        break;
        case 2: personagem = "mago"
        break;
        case 3:  personagem = "arqueiro"
        break;
        default: personagem = "Opção inválida"
      }

      let desempenho =""
      if(total >= 200 ){
        desempenho = "Excelente!"
      }
      else if(total >=100 && total <=199){
        desempenho = "Bom!"
      }
      else if(total >= 50 && total <= 99){
        desempenho = "Regular"
      }
      else if(total <= 49){
        desempenho =" Precisa melhorar"
      }
      else{
        console.log("Por favor refaça");
      }

      let apto = (idade >= 18 && total >= 100);
      let status = apto? "Aprovando para a próxima fase " : "Reprovando para a próxima fase";

      console.log("============================");
      console.log("====RESULTADO DO JOGADOR====");
      console.log("============================");
      console.log("Nome:" + nome);
      console.log("Idade:" +idade);
      console.log("Personagem:" + personagem);
      console.log("Fase1:" +primeira);
      console.log("Fase2:" +segunda);
      console.log("Total:" +total);
      console.log("Desempenho:" +desempenho);
      console.log("Apto para próxima fase:" +apto);
      console.log("============================");
     });
    });
  });
 });
});
