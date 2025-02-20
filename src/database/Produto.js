import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Produto = sequelize.define("produtos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  categoria: {
    type: DataTypes.STRING
  },
  peso: {
    type: DataTypes.FLOAT
  },
});

export default Produto;