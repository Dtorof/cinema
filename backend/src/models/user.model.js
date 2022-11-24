import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER, DOUBLE } = DataTypes

export const User = db.define('user',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: STRING,
            allowNull: true
        },
        lastname: {
            type: STRING,
            allowNull: true
        },
        cc:{
            type: STRING,
            allowNull: true
        },
        address:{
            type: STRING,
            allowNull: true
        },
        phone:{ 
            type: STRING,
            allowNull: true
        },
        email:{ 
            type: STRING,
            allowNull: true
        }
        }, {timestamps: false})

