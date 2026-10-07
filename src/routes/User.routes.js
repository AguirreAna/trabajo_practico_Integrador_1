import express from "express";
import {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser
} from "../controllers/User.controller.js";

export const UserRoutes = express.Router();

UserRoutes.post("/user", createUser);
UserRoutes.get("/user", getAllUsers);
UserRoutes.get("/user/:id", getUserById);
UserRoutes.put("/user/:id", updateUser);
UserRoutes.delete("/user/:id", deleteUser);