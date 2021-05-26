const Reader = require("./classes/Reader.js");
const file = "./users.csv";

const reader = new Reader();

async function main(){
    const dados = await reader.Read(file);
}


main();