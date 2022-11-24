import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

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
        desc_location:{
            type: STRING,
            allowNull: true
        }, 
        seats_distribution: { 
            type: DataTypes.STRING(10000), 
            get: function() {
                return JSON.parse(this.getDataValue('seats_distribution'));
            }, 
            set: function(val) {
                return this.setDataValue('seats_distribution', JSON.stringify(val));
            }
        }
    },{timestamps: false})

