// Importar o mongoose para acessar o metodos
const mongoose = require("mongoose");

//url de conexão  = mongodb://servidor:porta/nomedobanco

const Conn = () => {
  mongoose
    .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_BASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Conectado");
    })
    .catch((err) => console.log("Falha de conexao com o MongoDB", err));
};

//Exporta a função Conn
module.exports = Conn;
