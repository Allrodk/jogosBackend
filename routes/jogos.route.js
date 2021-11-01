const express = require("express");
const router = express.Router();

const controller = require("../controllers/jogos.controller");

//Rotas
router.get("/", controller.getTudo);
router.get("/:id", controller.getUm);
router.post("/novo", controller.postNovo);
router.put("/editar/:id", controller.putEditar);
router.get("/deletar/:id", controller.deletar);

module.exports = router;
