import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes


export const Category = db.define('category',{
       
     id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      name: {
        type: STRING,
        allowNull: false
        }
    }, {timestamps: false})
