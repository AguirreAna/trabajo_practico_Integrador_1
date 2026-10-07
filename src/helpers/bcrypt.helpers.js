import bcrypt from "bcryptjs";

//hashear contraseña

export const hashPassword = async (password) => {
    const saltRounds = 10; // entre 10-12 es recomendado
    const hasherdPassword = await bcrypt.hash(password, saltRounds);

    return hasherdPassword;
};
//verificacion de contraseña
export const comparePassword = async (password, hashedPassword) =>{
    return await bcrypt.compare(password, hashedPassword);
};