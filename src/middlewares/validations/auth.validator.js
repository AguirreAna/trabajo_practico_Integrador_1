import { check } from "express-validator";

// Validaciones para LOGIN
export const loginValidation = [
  check("email")
    .isEmail()
    .withMessage("El email debe ser válido"),

  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria"),
];

// Validaciones para REGISTER
export const registerValidation = [
  check("username")
    .notEmpty()
    .withMessage("El username es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El username debe tener al menos 3 caracteres"),

  check("email")
    .isEmail()
    .withMessage("El email debe ser válido"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener mínimo 6 caracteres"),

  check("confirmPassword")
    .notEmpty()
    .withMessage("Debes confirmar la contraseña")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
];
