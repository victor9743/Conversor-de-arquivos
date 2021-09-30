var reader = require("./classes/Reader");
var writer = require("./classes/Writer");
var processor = require("./classes/Processor");
var Table = require("./classes/Table");
var HTMLparser = require("./HTMLparser");
var PDFwriter = require("./classes/PDFWriter");

var leitor = new reader();
var escritor = new writer();


async function main(){
    var dados  = await leitor.read("../planilha_exemplo_dados.csv");
    var dadosprocessados = processor.Process(dados);
    var pessoas = new Table(dadosprocessados);
    // pessoas.rows.push(["10","novoItem","nova cidade"]);
    console.log("Linhas",pessoas.rowCount);
    console.log("Colunas", pessoas.columnCount);

   var html = await HTMLparser.Parse(pessoas);

   escritor.write("htmlGerado.html",html);
    // console.log(pessoas.rows);
    PDFwriter.writePDF("htmlGerado.pdf", html);

}

main();