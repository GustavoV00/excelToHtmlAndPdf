const fs = require("fs");
const util = require("util");

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }
 
    async Read(path){
        try{
            return await this.reader(path, "utf8");

        }catch(er){
            return undefined;
        }
    }
}

module.exports = Reader;