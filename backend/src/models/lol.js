import {  DataTypes, UUIDV4 } from "sequelize";
import { db } from "../db/db.js";

export const  MyModel = db.define('MyModel', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    myArrayField: { 
        type: DataTypes.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('myArrayField'));
        }, 
        set: function(val) {
            return this.setDataValue('myArrayField', JSON.stringify(val));
        }
    }
},{timestamps: false})