const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let jogos = [
  { titulo: "Plant vs Undead", ano: "2021", token: "PVU" },
  { titulo: "Block Farm Club", ano: "2021", token: "BFC" },
  { titulo: "Chivas Farming", ano: "2021", token: "CHIV" },
];

app.get("/", (req, res) => {
  res.send("Jogos NFT");
});

//GET rota que exibe a lista de jogos completa
app.get("/jogos", (req, res) => {
  res.send(jogos);
});

app.get("/jogos/:id", (req, res) => {
  const id = req.params.id - 1;
  res.json(jogos[id]);
});

//POST salvando novo jogo na lista
app.post("/jogos", (req, res) => {
  const { titulo, ano, token } = req.body;
  jogos.push({ titulo, ano, token });
  res.send(jogos);
});

//PUT atualiza uma posicao da lista que foi identificada
app.put("/jogos/:id", (req, res) => {
  const id = req.params.id - 1;
  const { titulo, ano, token } = req.body;
  jogos[id] = { titulo, ano, token };
  res.send(jogos);
});

app.delete("/jogos/:id", (req, res) => {
  const id = req.params.id - 1;
  delete jogos[id];
  res.send(jogos);
});

app.listen(port, () => {
  console.log(`App rodando em: http://localhost:${port}`);
});
