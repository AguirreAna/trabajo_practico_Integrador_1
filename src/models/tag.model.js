import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { profileModel } from "../models/profile.model.js";


export const tagModel = sequelize.define(
    "tag",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: "tags",
    }
);


