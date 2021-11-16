// Importar o mongoose para acessar o metodos
const mongoose = require("mongoose");

//url de conexão  = mongodb://servidor:porta/nomedobanco

const Conn = () => {  
  mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}?retryWrites=true&w=majority`, {
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
