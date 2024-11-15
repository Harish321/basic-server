import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Driver = sequelize.define("Driver", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    licenseNo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
});

export default Driver;
