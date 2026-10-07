import express from "express";
import dotenv from "dotenv";
dotenv.config();

//inicializar express
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded());

// cookie
import cookieParser from "cookie-parser";
app.use(cookieParser());

//base de datos
import { startDB } from "./src/config/database.js";
startDB();

// relaciones
import "./src/models/index.model.js";

// modelos
import { UserModel } from "./src/models/User.model.js";
import { tagModel } from "./src/models/tag.model.js";
import { profileModel } from "./src/models/profile.model.js";
import { articleTagModel } from "./src/models/article.tag.model.js";
import { articleModel } from "./src/models/article.model.js";


// rutas
import { UserRoutes } from "./src/routes/User.routes.js";
import { tagRoutes } from "./src/routes/tag.routes.js";
import { profileRoutes } from "./src/routes/profile.routes.js";
import { articleRoutes } from "./src/routes/article.routes.js";
import { articleTagRoutes } from "./src/routes/article.tag.routes.js";
import { authRoutes } from "./src/routes/auth.routes.js";

// MONTAR RUTAS
app.use("/api", UserRoutes);
app.use("/api", tagRoutes);
app.use("/api", profileRoutes);
app.use("/api", articleRoutes);
app.use("/api", articleTagRoutes);
app.use("/api", authRoutes);

//ruta base
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

//iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
