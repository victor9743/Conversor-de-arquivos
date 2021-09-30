class Processor{
    static Process(dados){

        var linhas = dados.split("\r\n");

        var rows = [];
        linhas.forEach(x => {
            var linha = x.split(",");
            rows.push(linha);
            
        });
       return rows;
    }

}

module.exports = Processor;