const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos",{
    nome:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    bairro:{
        type: db.Sequelize.STRING
    },
    cep:{
        type: db.Sequelize.STRING
    },
    cidade:{
        type: db.Sequelize.STRING
    },
    estado:{
        type: db.Sequelize.STRING
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

module.exports=Agendamentos

Agendamentos.sync({force:true})

// Agendamentos.create({
//     nome: "nome1",
//     endereco: "endereco1",
//     bairro: "bairro1",
//     cep: "cep1",
//     cidade: "cidade1",
//     estado: "estado1",
//     observacao: "observacao1"
// })
