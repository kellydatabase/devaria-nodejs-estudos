const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Informe a sua idade:', input=> {
    leituraDeCampo = input;
console.log(`o usuário digitou: ${leituraDeCampo}`);
});