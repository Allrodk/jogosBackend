//Importar model do MongoDB
const Jogos = require("./../models/jogos");

class jogosService {
  getTudo = async () => {
    return await Jogos.find();
  };
  getUm = async (id) => {
    return await Jogos.findById(id);
  };
  postNovo = async (jogo) => {
    return await Jogos.create(jogo);
  };
  putEditar = async (id, jogo) => {
    return await Jogos.updateOne({ _id: id }, jogo);
  };
  deletar = async (id) => {
    return await Jogos.deleteOne({ _id: id });
  };
}

module.exports = jogosService;
