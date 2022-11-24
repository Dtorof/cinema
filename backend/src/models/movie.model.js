import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER, DOUBLE } = DataTypes

export const Movie = db.define('movie',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: STRING,
            allowNull: true
        },
        category_id: {
            type: INTEGER,
            allowNull: true
        },
        duration:{
            type: DOUBLE,
            allowNull: true
        },
        synopsis:{
            type: STRING(1000),
            allowNull: true
        },
        age_range:{ 
            type: INTEGER,
            allowNull: true
        }
        }, {timestamps: false})

