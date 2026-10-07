import {  Router } from "express";
import { 
    createArticle,
    getArticleById,
    getAllArticles,
    updateArticle, 
    deleteArticle 
} from "../controllers/article.controller.js";

export const articleRoutes = Router();
 
articleRoutes.post("/article", createArticle);
articleRoutes.get("/article", getAllArticles);
articleRoutes.get("/article/:id", getArticleById);
articleRoutes.put("/article/:id", updateArticle);
articleRoutes.delete("/article/:id", deleteArticle);
