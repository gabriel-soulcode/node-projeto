import { Sequelize } from "sequelize";

const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(database, user, password, {
  dialect: "mysql",
  host: "localhost"
});

export default sequelize;