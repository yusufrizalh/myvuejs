/*
    table: courses
    fields:
        > id
        > title
        > price
        > duration
        > description
        > createdAt, updatedAt
*/

import { Sequelize } from "sequelize";
import dbConn from "../config/database.js";

const { DataTypes } = Sequelize;

const CourseModel = dbConn.define(
  "courses",
  {
    title: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL },
    duration: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

export default CourseModel;
