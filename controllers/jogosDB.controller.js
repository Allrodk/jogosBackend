const JogosService = require("./../services/jogos.services");
const jogosService = new JogosService();
let message = "";

class JogosController {
  //GET rota que exibe a lista de jogos completa
  getTudo = async (req, res) => {
    const jogos = await jogosService.getTudo();
    res.send(jogos);
  };

  getUm = async (req, res) => {
    const jogo = await jogosService.getUm(req.params.id);
    res.send(jogo);
  };

  //POST salvando novo jogo na lista
  postNovo = async (req, res) => {
    const jogo = req.body;
    if (!jogo) {
      return;
    }
    await jogosService
      .postNovo(jogo)
      .then(() => {
        res.send({ message: `Jogo ${jogo.titulo} cadastrado com sucesso` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).res.send({ message: `Erro no servidor` });
      });
  };

  //PUT atualiza uma posicao da lista que foi identificada
  putEditar = async (req, res) => {
    const jogo = req.body;
    const idParam = req.params.id;
    await jogosService
      .putEditar(idParam, jogo)
      .then(() => {
        res.send({ message: `Jogo ${jogo.titulo} alterado com sucesso` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).res.send({ message: `Erro no servidor` });
      });
  };

  deletar = async (req, res) => {    
    const idParam = req.params.id;
    await jogosService
      .deletar(idParam)
      .then(() => {
        res.send({ message: `Jogo excluído com sucesso` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).res.send({ message: `Erro no servidor` });
      });
  };
}

module.exports = JogosController;
