import { Sequelize } from "sequelize";

const sequelize = new Sequelize("cab_db", "root", "", {
    host: "192.168.29.59",
    dialect: "mysql",
});

export default sequelize;
