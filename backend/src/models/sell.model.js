import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Schedule } from "./schedule.model.js";
import {User} from "./user.model.js"
import {Billboard} from "./billborad.model.js"
const { STRING, INTEGER, DOUBLE } = DataTypes
//test
export const Sell = db.define('sell',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        billboard_id:{
            type: INTEGER,
            allowNull: true
        },
        amount:{
            type: INTEGER,
            allowNull: true
        },
        user_id:{
            type: INTEGER,
            allowNull: true
        },
        total:{
            type: INTEGER,
            allowNull: true
        },
     

        })

        Sell.belongsTo(Billboard, {foreignKey: 'billboard_id', sourceKey: 'id'});
        Billboard.hasMany(Sell, {foreignKey: 'billboard_id', targetId: 'id'})

        Sell.belongsTo(User, {foreignKey: 'user_id', sourceKey: 'id'});
        User.hasMany(Sell, {foreignKey: 'user_id', targetId: 'id'})

 

