var ejs = require("ejs");
class HTMLparser{
    static async Parse(table){
        return await ejs.renderFile("./planilha.ejs",{header: table.header, rows: table.rows});
    }
}
module.exports = HTMLparser