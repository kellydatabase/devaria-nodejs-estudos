const listArgumentos = process.argv.slice(2);

console.log('--------------Executando um FOR-------------------');
for(let controladoFor = 0; controladoFor < listArgumentos.length; controladoFor++){
    console.log(`Posição ${controladoFor}valor lido = ${listArgumentos[controladoFor]}`);
}

console.log('--------------Executando um WHILE-------------------');
let constroladorwhile = 0;
while(constroladorwhile < listArgumentos.length){
    console.log(`POsição ${constroladorwhile} valor lido = ${listArgumentos[constroladorwhile]}`);
    constroladorwhile++;
}

console.log('--------------Executando um DO WHILE-------------------');
let controladorDoWhile = 0;
do{
    console.log(`posição ${controladorDoWhile} valor lido = ${listArgumentos [controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile <listArgumentos.length)

// no exemplo o FOR OF vai ler a lista/argumento, sem a necessidade de informar a posição
console.log('--------------Executando um FOR OF-------------------');

for(const argumento of listArgumentos){
    console.log(`valor lido = ${argumento}`);
}