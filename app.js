const Reader = require("./classes/Reader.js");
const Writer = require("./classes/Writer.js");
const Processa = require("./classes/Processa.js");
const Table = require("./classes/Table.js");
const HtmlParser = require("./classes/HtmlParser.js");
const PdfWriter = require("./classes/PdfWriter.js");
const file = "./users.csv";

const reader = new Reader();
const writer = new Writer();

async function main(){
    const dados = await reader.Read(file);
    const dadosProcessados = Processa.Process(dados);

    const users = new Table(dadosProcessados);
    const html = await HtmlParser.Parse(users);

    const htmlPdf = `arquivosGeradosPdf/${Date.now()}.pdf`;
    const csvPdf = `arquivosGeradosHtml/${Date.now()}.html`;

    writer.Write(csvPdf, html);
    PdfWriter.WritePDF(htmlPdf, html);
}

main();