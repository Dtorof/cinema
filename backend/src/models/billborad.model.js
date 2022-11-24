import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Schedule } from "./schedule.model.js";
import {Movie} from "./movie.model.js"
import {Room} from "./room.model.js"
const { STRING, INTEGER, DOUBLE } = DataTypes

export const Billboard = db.define('billboard',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        room_id:{
            type: INTEGER,
            allowNull: true
        },
        movie_id:{
            type: INTEGER,
            allowNull: true
        },
        schedule_id:{
            type: INTEGER,
            allowNull: true
        },
        price:{
            type: INTEGER,
            allowNull: true
        },
        start_date:{
            type: STRING,
            allowNull: true
        },
        end_date:{
            type: STRING,
            allowNull: true
        },

        state:{
            type: STRING,
            allowNull: true
        }


        })

        Billboard.belongsTo(Schedule, {foreignKey: 'schedule_id', sourceKey: 'id'});
        Schedule.hasMany(Billboard, {foreignKey: 'schedule_id', targetId: 'id'})

        Billboard.belongsTo(Movie, {foreignKey: 'movie_id', sourceKey: 'id'});
        Movie.hasMany(Billboard, {foreignKey: 'movie_id', targetId: 'id'})

        Billboard.belongsTo(Room, {foreignKey: 'room_id', sourceKey: 'id'});
        Room.hasMany(Billboard, {foreignKey: 'room_id', targetId: 'id'})

