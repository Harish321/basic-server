import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const DailyEntry = sequelize.define("DailyEntry", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cabId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    driverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    income: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    expenses: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    notes: DataTypes.STRING,
});

export default DailyEntry;
