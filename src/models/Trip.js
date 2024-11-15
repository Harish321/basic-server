import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Trip = sequelize.define("Trip", {
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
    startLocation: DataTypes.STRING,
    endLocation: DataTypes.STRING,
    fare: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
});

export default Trip;
