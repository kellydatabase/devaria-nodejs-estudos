//utilizado para validar se o usuário tem mais de 18 anos e após se o nome se enquadra dentro dos liberados

const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai chegar se voce é maior de 18 anos e tem habilitacao oara saber se voce pode entrar no kart');
console.log('Alem de suas verificacoes, precisamos verificar se voce esta na lista de presenca de horario');

readLine.question('Qual o ano do seu nascimento?', ano=>{
    if(ano > 2005){
        console.log('voce não tem 18 anos');
    }else{
        readLine.question('voce tem habilitação? (Sim/Nao) ', temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voce não tem habilitação para entrar no Kart');
            }else{
                readLine.question('Qual o seu nome?' , nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('bem vindo ao Kart Douglas');
                            break;
                        case 'Rafael':
                            console.log('bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi indentificadona lista de presença');
                    }
                });
            }
        })
    }
})