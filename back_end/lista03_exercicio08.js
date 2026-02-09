const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro valor: ", (inicio) => {
  rl.question("Digite o último valor: ", (fim) => {
    rl.question("Digite o incremento: ", (inc) => {

      let valorInicio = Number(inicio);
      let valorFim = Number(fim);
      let incre = Number(inc);

      if (incremento <= 0) {
        console.log("O incremento deve ser maior que zero!");
        rl.close();
        return;
      }

      let resultado = "Contagem: ";

      if (valorInicio < valorFim) {
        
        for (let i = valorInicio; i < valorFim; i += incre) {
          resultado += i + " ";
        }
      } else {
        
        for (let i = valorInicio; i > valorFim; i -= incre) {
          resultado += i + " ";
        }
      }

      console.log(`\n Contagem: ${resultado}`);
      console.log("Acabou!");
      rl.close();
    });
  });
});
