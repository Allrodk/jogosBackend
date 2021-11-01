const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", require("./routes/jogos.route"));

app.listen(port, () => {
  console.log(`App rodando em: http://localhost:${port}`);
});
