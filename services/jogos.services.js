//Importar model do MongoDB
const Jogos = require("./../models/jogos");

class jogosService {
  getTudo = async () => await Jogos.find();
  getUm = async (id) => await Jogos.getUm(id);
  postNovo = async () => await Jogos.postNovo();
  putEditar = async (id) => await Jogos.putNovo(id);
  deletar = async (id) => await Jogos.deletar(id);
}

module.exports = jogosService;
