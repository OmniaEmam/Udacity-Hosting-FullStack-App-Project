import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
});

// const sequelize = new Sequelize(
//   "postgres://postgres:myPassword@database-1.cwz33azlvlsu.us-east-1.rds.amazonaws.com:5432/postgres"
// );