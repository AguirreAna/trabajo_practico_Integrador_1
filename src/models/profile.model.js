import {DataTypes} from 'sequelize';
import {sequelize} from "../config/database.js";
import { tagModel } from "../models/tag.model.js";

export const profileModel = sequelize.define(
    "profile",
    {
        //modelo de perfil
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        first_name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        biography:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        avatar:{
            type:DataTypes.STRING(255),
            allowNull: true
        },
        brith_date:{
            type:DataTypes.DATE,
            allowNull: true
        },
        created_at:{
            type: DataTypes.DATE,
        },
        udated_at:{
            type: DataTypes.DATE,
        },
        
    },
    {


        timestamps: false,
        paranoid: true,
        
    }
);
