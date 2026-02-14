function gerarnumero (){
    return Math.floor(Math.random()* 11);
}

let  numeros = [];

for (let i = 0; i < 20; i++){
    numeros.push(gerarnumero());
}

console.log("Números sorteados:");
console.log(numeros);

let acimade5 = 0;
for(let n of numeros){
    if (n > 5 ) {
        acimade5++;
    }
}
console.log("Número acima de 5:",acimade5);

let divisivelpor3 = 0;
for (let n of numeros){
    if (n % 3 === 0){
        divisivelpor3++;
    }
}
console.log("Números divísiveis por 3:",divisivelpor3);
