import { Router } from "express";
import Cliente from "../database/Cliente.js";

const clienteRoutes = Router();

clienteRoutes.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch(erro) {
    res.status(500).json({
      statusCode: 500,
      status: "Erro interno no servidor",
      erro
    });
  }
});

clienteRoutes.post("/clientes", async (req, res) => {
  try {
    const { nome, email, dataNascimento, cpf } = req.body;
    if (!nome || !dataNascimento) {
      res.status(400).json({
        statusCode: 400,
        status: "Requisição inválida",
        message: "Preencha todos os valores obrigatórios"
      });
      return;
    }

    const dados = { nome, email, dataNascimento, cpf };
    const cliente = await Cliente.create(dados);
    res.status(200).json(cliente);
  } catch(erro) {
    res.status(500).json({
      statusCode: 500,
      status: "Erro interno no servidor",
      erro
    });
  }
});

export default clienteRoutes;