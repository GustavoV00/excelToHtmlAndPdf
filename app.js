const Reader = require("./classes/Reader.js");
const Processa = require("./classes/Processa.js");
const file = "./users.csv";

const reader = new Reader();

async function main(){
    const dados = await reader.Read(file);
    Processa.Process(dados);
}


main();