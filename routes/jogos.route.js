const express = require("express");
const router = express.Router();

const JogosController = require("../controllers/jogos.controller");
const jogosController = new JogosController();

//Rotas
router.get("/", jogosController.getTudo);
router.get("/:id", jogosController.getUm);
router.post("/novo", jogosController.postNovo);
router.put("/editar/:id", jogosController.putEditar);
router.delete("/deletar/:id", jogosController.deletar);

module.exports = router;
