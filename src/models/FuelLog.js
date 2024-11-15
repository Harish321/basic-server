import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FuelLog = sequelize.define("FuelLog", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cabId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fuelType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
});

export default FuelLog;
