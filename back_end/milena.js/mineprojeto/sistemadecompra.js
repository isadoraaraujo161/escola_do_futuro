const console = require("console");
const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o seu nome:",(nome)=>{
    rl.question("Digite o nome do produto:",(nomeproduto)=>{
      rl.question("Digite o preço do produto:",(preco)=>{
         rl.question("Digite a quantidade de produtos:",(quatidadedeprodutos)=>{
            
          preco = Number(preco);
          quatidadedeprodutos = Number(quatidadedeprodutos);

          valortotal = preco * quatidadedeprodutos 

          let classificacao
          if(valortotal <=50){
            classificacao = "Compra pequena"
          }
          else if (valortotal >50 && valortotal <=200){
            classificacao = "Compra média"
          }
          else if (valortotal < 200){
            classificacao = "Compra grande"
          }
          else{
            classificacao = "Compra inválida"
          }

          console.log("====FORMA DE PAGAMENTO====");
          console.log("1-pix");
          console.log("2-Cartão");
          console.log("3-Dinheiro");
          rl.question("Digite a opção escolhida:",(opcao)=>{

            opcao = Number(opcao);
            let pagamento;
            switch(opcao){
            case 1: pagamento = "Pix"
            break;
            case 2: pagamento = "Cartão"
            break;
            case 3: pagamento = "Dinheiro"
            break;
            default: pagamento = "Forma de pagemnto inválido"
            break;
            }

            let desconto = (valortotal =>100 && quatidadedeprodutos >= 2) 
            let status2 = desconto? "Aprovando":"Reprovando"
            let frete = (valortotal<=150)
            let status = frete? "Frete grátis aprovando" : "Frete grátis reprovado"

                  console.log("============================");
                  console.log("====RESUMO DA COMPRA====");
                  console.log("============================");
                  console.log("Cliente:" + nome);
                  console.log("Produto:" +nomeproduto);
                  console.log("Preço:" + preco);
                  console.log("Quantidade:" +quatidadedeprodutos);
                  console.log("Valor Total:" +valortotal);
                  console.log("Classificação:"+classificacao);
                  console.log("Forma de pagamento:" +pagamento);
                  console.log("Desconto especial:"+status2);
                  console.log("Frete:" +status);
                  console.log("============================");
                  console.log("====OBRIGADA PELA COMPRA!====");
                  console.log("============================");
          });
         });
      });
    });
});
