const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstanteString = 'Minha Primeira Constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Informe a Sua Idade:', input => {
    leituraDeCampo = input;
    console.log(`o usuario digitou : ${leituraDeCampo}`);
});