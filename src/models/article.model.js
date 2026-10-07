import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const articleModel = sequelize.define(
    "article_tag",
    {
        id:{ 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        excerpt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        Status: {
            type: DataTypes.ENUM("active", "inactive"),
            defaultValue: "active"
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id",
        }

    },
    {
        timestamps: false,
        paranoid: true,
        tableName: "article"  
    }
    
)
