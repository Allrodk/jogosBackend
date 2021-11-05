const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Conn = require("./conn/conn");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/", require("./routes/jogos.route"));

//Chama o metodo para conexao com o Banco de Dados
Conn();

app.listen(port, () => {
  console.log(`App rodando em: http://localhost:${port}`);
});
