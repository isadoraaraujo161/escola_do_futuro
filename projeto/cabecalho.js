const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const dataAtual = new Date();
const dataFormatada = dataAtual.toLocaleDateString('pt-BR');

console.log("Cabeçalho do projeto");
console.log("Escola do futuro José Luiz bittencourt");
console.log("Curso técnico em Desenvolvimento Web e cyber segurança");
console.log("Disciplina: Back-end");
console.log("Professor:Geoger Mendes Marra");
console.log("Projeto: Leitura e escrita de arquivos em node.js");
console.log("Integrantes: Dirhanna, Emanuely, Gerson, Isadora, Isabella");
console.log("Data de quando inicou o projeto: 13/04/2026")
console.log(dataFormatada);
