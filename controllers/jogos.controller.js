let message = "";
let jogos = [
  {
    id: 1,
    titulo: "Plant vs Undead",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlCGxWNOA4DL3nMYIFFCGXwhVBdwFfQsMpQ&usqp=CAU",
    genero: "Tower Defense",
    nota: "3",
    jogado: true,
  },
  {
    id: 2,
    titulo: "Block Farm Club",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBwoCRfkhVBWa1h2EisCi6kjH7k-UsFBpWw&usqp=CAU",
    genero: "Farming",
    nota: "5",
    jogado: true,
  },
  {
    id: 3,
    titulo: "Mir 4",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbShmNbf5Dk8dw-TIIPxPzyde_3cz2KYKCQ&usqp=CAU",
    genero: "MMORPG",
    nota: "5",
    jogado: true,
  },
];

module.exports = {
  //GET rota que exibe a lista de jogos completa
  getTudo: async (req, res) => {
    res.send(jogos);
  },

  getUm: async (req, res) => {
    const id = req.params.id - 1;
    res.json(jogos[id]);
  },

  //POST salvando novo jogo na lista
  postNovo: async (req, res) => {
    const novoJogo = req.body;
    novoJogo.id = [...jogos].pop().id + 1;
    if (novoJogo.titulo != "" || novoJogo.imagem != "") {
      jogos.push(novoJogo);
      message = `Jogo ${novoJogo.titulo} cadastrado com sucesso`;
    }
    setTimeout(() => {
      message = "";
    }, 5000);
    res.send({ jogos, message });
  },

  //PUT atualiza uma posicao da lista que foi identificada
  putEditar: async (req, res) => {
    const jogoAtual = req.body;
    const idParam = req.params.id;
    const index = await jogos.findIndex((jogo) => jogo.id == idParam);
    if (jogoAtual.titulo != "" || jogoAtual.imagem != "") {
      jogos[index] = { ...jogos[index], ...jogoAtual };
      message = `Jogo ${jogoAtual.titulo} alterado com sucesso`;
    }
    setTimeout(() => {
      message = "";
    }, 5000);
    res.send({ jogos, message });
  },

  deletar: async (req, res) => {
    const idParam = req.params.id;
    const index = jogos.findIndex((jogo) => jogo.id == idParam);
    const jogoAtual = jogos[index];
    console.log(jogoAtual);
    if (jogoAtual) {
      jogos.splice(index, 1);
      message = `Jogo ${jogoAtual.titulo} escluído com sucesso`;
    }
    setTimeout(() => {
      message = "";
    }, 5000);
    res.send({ jogos, message });
  },
};
