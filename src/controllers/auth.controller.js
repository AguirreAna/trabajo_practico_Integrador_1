import { matchedData } from "express-validator";
import { UserModel } from "../models/User.model.js";
import { hashPassword, comparePassword } from "../helpers/bcrypt.helpers.js";
import { generateToken } from "../helpers/jwt.helpers.js";

// Crear usuario
export const login = (req, res) => {
    // lógica de login
};

// Registrar usuario
export const register = async (req, res) => {
    const data = matchedData(req);

    try {
        // Encriptar contraseña
        data.password = await hashPassword(data.password);

        // Crear usuario
        const user = await UserModel.create(data);

        return res.json({
            msg: "Usuario registrado correctamente",
            user
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Error al registrar usuario",
            error: error.message
        });
    }
};

export const createUser = async (req, res) => {
    const data = matchedData(req);

    try {
        data.password = await hashPassword(data.password);

        const user = await UserModel.create(data);

        return res.json({
            msg: "Usuario creado correctamente",
            user
        });
    } catch (error) {
        return res.status(500).json({ msg: "Error al crear usuario", error });
    }
};

// Obtener todos
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ msg: "Error al obtener usuarios" });
    }
};

// Obtener por ID
export const getUserById = async (req, res) => {
    const { id } = matchedData(req);

    try {
        const user = await UserModel.findByPk(id);

        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

        return res.json(user);
    } catch (error) {
        return res.status(500).json({ msg: "Error al obtener usuario" });
    }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
    const { id, ...data } = matchedData(req);

    try {
        const user = await UserModel.findByPk(id);

        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

        if (data.password) {
            data.password = await hashPassword(data.password);
        }

        await user.update(data);

        return res.json({ msg: "Usuario actualizado", user });
    } catch (error) {
        return res.status(500).json({ msg: "Error al actualizar usuario" });
    }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
    const { id } = matchedData(req);

    try {
        const user = await UserModel.findByPk(id);

        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

        await user.destroy();

        return res.json({ msg: "Usuario eliminado" });
    } catch (error) {
        return res.status(500).json({ msg: "Error al eliminar usuario" });
    }
};
