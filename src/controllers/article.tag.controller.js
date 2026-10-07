import {articleTagModel} from "../models/article.tag.model.js";

export const createArticleTag = async (req, res) => {
  try {
    const { articleId, tagId } = req.body;

    if (!articleId || !tagId) {
      return res.status(400).json({ message: "El articleId y tagId no deben ser vacios" });
    }

    const articleTag = await articleTagModel.create({ articleId, tagId });
    return res.status(201).json(articleTag);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getAllArticleTags = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getArticleTagById = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const updateArticleTag = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteArticleTag = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

