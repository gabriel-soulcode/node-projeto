import { Sequelize } from "sequelize";

const database = "db_api_node";
const user = "root";
const password = "123456";

const sequelize = new Sequelize(database, user, password, {
  dialect: "mysql",
  host: "localhost"
});

export default sequelize;