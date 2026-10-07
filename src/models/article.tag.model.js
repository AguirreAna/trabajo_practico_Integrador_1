import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const articleTagModel = sequelize.define(
    "article_tag",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        article_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tag_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: "article_tags"
    }
);
