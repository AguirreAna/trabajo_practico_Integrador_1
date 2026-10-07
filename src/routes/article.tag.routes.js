import {  Router } from "express";
import { 
    createArticleTag,
    getArticleTagById,
    getAllArticleTags,
    updateArticleTag, 
    deleteArticleTag 
} from "../controllers/article.tag.controller.js";

export const articleTagRoutes= Router();
 
articleTagRoutes.post("/article-tag", createArticleTag);
articleTagRoutes.get("/article-tag", getAllArticleTags);
articleTagRoutes.get("/article-tag/:id", getArticleTagById);
articleTagRoutes.put("/article-tag/:id", updateArticleTag);
articleTagRoutes.delete("/article-tag/:id", deleteArticleTag);