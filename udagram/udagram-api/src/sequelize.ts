import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
 "postgres://postgres:postgres@database-2.cwz33azlvlsu.us-east-1.rds.amazonaws.com:5432/postgres"
);

// const sequelize = new Sequelize(
//   "postgres://postgres:myPassword@database-1.cwz33azlvlsu.us-east-1.rds.amazonaws.com:5432/postgres"
// );