//Importar o mongoose
const mongoose = require("mongoose");

//Collection Jogos
const jogosModel = new mongoose.Schema({
  titulo: { type: String, required: true },
  imagem: { type: String, required: true },
  genero: { type: String, required: true },
  nota: { type: Number, required: true },
  jogado: { type: Boolean, required: false },
  dataCriacao: { type: Date, default: Date.now },
});

const Jogos = mongoose.model("jogos", jogosModel);

module.exports = Jogos;
