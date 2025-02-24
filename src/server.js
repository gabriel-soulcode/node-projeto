// Configuração das variaveis de ambiente do arquivo .env
import "dotenv/config";

// express é um módulo que permite criar um servidor HTTP
import express from "express";
import sequelize from "./database/db.js";
import produtoRoutes from "./routes/produtoRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";

// Conexão com banco de dados
sequelize.authenticate().then(() => {
  console.log("Banco de dados conectado.");
  // Sincronizar as tabelas do MySQL com os modelos no Node
  sequelize.sync(); // As tabelas são criadas automaticamente
});

// Criação de um novo servidor configurado
const server = express();

// Permite que o servidor reconheça arquivos JSON no corpo das requisições
server.use(express.json());

// Configuração da primeira rota tipo GET
server.get("/", (req, res) => {
  res.status(200).json({ message: "Bem-vindo." });
});

// Incorporação as routas do produtoRoutes no servidor
server.use(produtoRoutes);
server.use(clienteRoutes);

// Inicialização do servidor na porta 3000 do computador 
server.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000.");
  console.log("Acesse: http://localhost:3000");
});