import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Bill = sequelize.define("Bill", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cabId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    description: DataTypes.STRING,
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
});

export default Bill;
