import express from "express";
import sequelize from "./config/database.js"; // import the sequelize connection
import { Cab, Driver, Trip, Transaction, FuelLog, Bill, DailyEntry } from "./models/associations.js"; // import models and associations

const app = express();
const port = process.env.PORT || 3000;

// Middlewares and routes setup
app.use(express.json());

// Example route
app.get("/", (req, res) => {
    res.send("Welcome to the Cab App API");
});

// Synchronize the database
sequelize.sync({ alter: true }).then(() => {
    console.log("Database synchronized!");
}).catch((error) => {
    console.error("Error synchronizing the database:", error);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
