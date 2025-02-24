import { Router } from "express";
import Produto from "../database/Produto.js";

const produtoRoutes = Router();

produtoRoutes.get("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({
        statusCode: 404,
        status: "Não encontrado",
        message: "O produto não existe na base de dados."
      });
    }
  } catch (erro) {
    res.status(500).json({
      statusCode: 500,
      status: "Erro interno no servidor.",
      erro,
    });
  }
});

produtoRoutes.get("/produtos", async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (erro) {
    res.status(500).json({
      statusCode: 500,
      status: "Erro interno no servidor.",
      erro,
    });
  }
});

produtoRoutes.post("/produtos", async (req, res) => {
  try {
    const { nome, preco, categoria } = req.body;
    if (!nome) {
      res.status(400).json({
        statusCode: 400,
        status: "Requisição inválida.",
        message: "O nome do produto é obrigatório.",
      });
      return; // a função deve para aqui
    }

    const dados = { nome, preco, categoria };
    const produto = await Produto.create(dados);
    res.status(200).json(produto);
  } catch (erro) {
    res.status(500).json({
      statusCode: 500,
      status: "Erro interno no servidor.",
      erro,
    });
  }
});

produtoRoutes.delete("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (produto) {
      await produto.destroy();
      res.status(200).json({ message: "Produto apagado." });
    } else {
      res.status(404).json({
        statusCode: 404,
        status: "Não encontrado",
        message: "O produto não existe na base de dados."
      });
    }

  } catch(erro) {
    res.status(500).json({
      statusCode: 500,
      status: "Erro interno no servidor.",
      erro,
    });
  }
});

produtoRoutes.put("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (produto) {
      const { nome, preco, categoria } = req.body;
      const dados = { nome, preco, categoria };
      const resultado = await produto.update(dados);
      res.status(200).json(resultado);
    } else {
      res.status(404).json({
        statusCode: 404,
        status: "Não encontrado",
        message: "O produto não existe na base de dados."
      });
    }
  } catch (erro) {
    res.status(500).json({
      statusCode: 500,
      status: "Erro interno no servidor.",
      erro,
    });
  }
});

export default produtoRoutes;