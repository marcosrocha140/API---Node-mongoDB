const mongoose = require("mongoose")

async function main(){
    
    try {
        
        await mongoose.connect("mongodb+srv://jackassbrasilce:N0Isck1TIzFVlsfK@apicluster.bpkat.mongodb.net/?retryWrites=true&w=majority&appName=Apicluster")
        console.log("Conexão com o DB estabelecida!")
    } catch (error) {
        console.log(`Erro na conexão com o banco de dados: ${error}`);
    }
}

module.exports = main;