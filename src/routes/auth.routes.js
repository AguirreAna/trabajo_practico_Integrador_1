import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

import { 
    loginValidation,
    registerValidation,
} from "../middlewares/validations/auth.validator.js";

import { validate } from "../middlewares/validations/validate.js";

export const authRoutes = Router();

authRoutes.post("/auth/login", loginValidation, validate, login);
authRoutes.post("/auth/register", registerValidation, validate, register);
