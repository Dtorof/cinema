import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER, ARRAY, JSON } = DataTypes

export const Room = db.define('room',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: STRING,
            allowNull: true
        },
        capacity: {
            type: INTEGER,
            allowNull: true
        },
        seats_distribution:{
            type: ARRAY(STRING),
            allowNull: true
        },
        desc_location:{
            type: STRING,
            allowNull: true
        },
        },{timestamps: false})

