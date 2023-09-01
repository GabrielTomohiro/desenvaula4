const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root","",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("conectado")
}).catch(function(erro){
    console.log("falha ao conectar" + erro)
})

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}

