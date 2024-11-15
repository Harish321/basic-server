import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Cab = sequelize.define("Cab", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cabNo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    type: DataTypes.STRING,
    fuelType: DataTypes.STRING,
});

export default Cab;
