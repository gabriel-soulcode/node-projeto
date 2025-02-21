// express é um módulo que permite criar um servidor HTTP
import express from "express";
import sequelize from "./database/db.js";
import produtoRoutes from "./routes/produtoRoutes.js";

// Conexão com banco de dados
sequelize.authenticate().then(() => {
  console.log("Banco de dados conectado.");
  // Sincronizar as tabelas do MySQL com os modelos no Node
  sequelize.sync(); // As tabelas são criadas automaticamente
});

// Criação de um novo servidor configurado
const server = express();

// Configuração da primeira rota tipo GET
server.get("/", (req, res) => {
  res.status(200).json({ message: "Bem-vindo." });
});

// Incorporação as routas do produtoRoutes no servidor
server.use(produtoRoutes);

// Inicialização do servidor na porta 3000 do computador 
server.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000.");
  console.log("Acesse: http://localhost:3000");
});