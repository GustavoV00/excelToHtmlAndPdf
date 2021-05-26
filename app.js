const Reader = require("./classes/Reader.js");
const Writer = require("./classes/Writer.js");
const Processa = require("./classes/Processa.js");
const Table = require("./classes/Table.js");
const HtmlParser = require("./classes/HtmlParser.js");
const file = "./users.csv";

const reader = new Reader();
const writer = new Writer();

async function main(){
    const dados = await reader.Read(file);
    const dadosProcessados = Processa.Process(dados);

    const users = new Table(dadosProcessados);
    const html = await HtmlParser.Parse(users);
    writer.Write("arquivoGerado.html", html);
}

main();