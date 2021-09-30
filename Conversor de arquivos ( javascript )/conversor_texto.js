const fs = require("fs");

// carregar um conteudo de um arquivo de texto
/*
fs.readFile("../texto_exemplo_dados",{encoding: 'utf-8'},(erro, dados)=>{
    if(erro){
        console.log(erro);
    }else{
        console.log(dados);
    }
});
//  inserir um novo conteudo em um documento de texto
fs.writeFile("../texto_exemplo_dados","Nome: Victor Costa",(err)=>{
    if(err){
        console.log("Erro durante o salvamento...");
    }
})
*/
var json;
fs.readFile("./usuario.json",{encoding: 'utf-8'},(erro, dados)=>{
    if(erro){
        console.log(erro);
    }else{
        json = JSON.parse(dados); // texto para objeto javascript

        if(json.sexo == 'M'){
             json.sexo = "Masculino"
            fs.writeFile("./usuario.json", JSON.stringify(json),(err)=>{
            
            })
        }else if(json.sexo == 'F'){
            json.sexo = "Feminino"
            fs.writeFile("./usuario.json",JSON.stringify(json),(err)=>{
                
            })
             
        }else{
            console.log("Campo já alterado");
        }
    }
})
