const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro valor: ", (inicio) => {
  rl.question("Digite o último valor: ", (fim) => {
    rl.question("Digite o incremento: ", (incremento) => {

      inicio = Number(inicio);
      fim = Number(fim);
      incremento = Number(incremento);

      let resultado = "Contagem: ";

      for (let i = inicio; i < fim; i += incremento) {
        resultado += i + " ";
      }

      console.log(resultado.trim());
      console.log("Acabou!");

      rl.close();
    });
  });
});
