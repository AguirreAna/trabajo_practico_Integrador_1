import { Sequelize } from "sequelize";

//CONEXION A LA BASE DE DATOS
export const sequelize = new Sequelize("tasks_user_db_3", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

//TESTEAR LA CONEXION
export const startDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: false });
    console.log("conexion a la db esta lista");
    }catch (error){
        console.log("error de conexion a la db", error);
    }
};