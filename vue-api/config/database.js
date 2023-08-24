import { Sequelize } from "sequelize";

const dbConn = new Sequelize("db_vue", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default dbConn;
