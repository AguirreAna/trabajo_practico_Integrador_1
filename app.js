import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { startDB } from "./src/config/database.js";
startDB();
import { UserModel } from "./src/models/User.model.js";
import { tagModel } from "./src/models/tag.model.js";
import { profileModel } from "./src/models/profile.model.js";
import { articleTagModel } from "./src/models/article.tag.model.js";
import { articleModel } from "./src/models/article.model.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
