import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER, DOUBLE } = DataTypes

export const Schedule = db.define('schedule',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        start_time:{
            type: STRING,
            allowNull: true
        },
        })

