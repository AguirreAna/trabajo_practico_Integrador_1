Trabajo Práctico Integrador 1  
### Tecnicatura Superior en Desarrollo de Software Multiplataforma  
### Alumna: Alejandra Aguirre

---
Descripción del proyecto
Este proyecto corresponde al **Trabajo Práctico Integrador 1**, donde se desarrolla una aplicación utilizando **Node.js**, **Express**, **Sequelize** y buenas prácticas de arquitectura backend.  
El objetivo es implementar un servidor con rutas, controladores, modelos y middlewares, siguiendo un flujo de trabajo profesional con Git y GitHub.

---

Estructura del proyecto

/trabajo_practico_Integrador_1
│
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   └── app.js
│
├── .gitignore
├── package.json
├── README.md
└── .env.example

---

## ⚙️ Tecnologías utilizadas

- **Node.js**
- **Express**
- **Sequelize**
- **MySQL**
- **CORS**
- **Cookie-Parser**
- **Git & GitHub**

---

instalacion de dependencias
npm install
Configurar variables de entorno
Crear un archivo .env basado en .env.example
DB_NAME=tu_base
DB_USER=tu_usuario
DB_PASS=tu_password
DB_HOST=localhost

Ejecutar el servidor
npm start

Arquitectura aplicada
El proyecto sigue una arquitectura organizada por capas:

Routes → reciben las solicitudes

Controllers → procesan la lógica

Services → reglas de negocio

Models → interacción con la base de datos

Middlewares → validaciones, CORS, cookies, etc.
