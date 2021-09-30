const fs = require("fs");
const util = require("util");
class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }
    async read(urlFile){
        try {
            return await this.reader(urlFile, "utf-8");
        } catch (error) {
            return undefined;   
        }
    }
}

module.exports = Reader;