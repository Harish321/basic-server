import { Sequelize } from "sequelize";

const sequelize = new Sequelize("cab_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;
