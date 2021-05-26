const Reader = require("./classes/Reader.js");
const Processa = require("./classes/Processa.js");
const Table = require("./classes/Table.js");
const HtmlParser = require("./classes/HtmlParser.js");
const file = "./users.csv";

const reader = new Reader();

async function main(){
    const dados = await reader.Read(file);
    const dadosProcessados = Processa.Process(dados);

    const users = new Table(dadosProcessados);
    const html = await HtmlParser.Parse(users);
    console.log(html);
}


main();