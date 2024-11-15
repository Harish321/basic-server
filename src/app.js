import express from "express";
import cors from 'cors'; // Import CORS
import sequelize from "./config/database.js"; // import the sequelize connection
import { Cab, Driver, Trip, Transaction, FuelLog, Bill, DailyEntry } from "./models/associations.js"; // import models and associations

import cabRoutes from './routes/cab.routes.js';
import driverRoutes from './routes/driver.routes.js';
import dailyEntryRoutes from './routes/dailyEntry.routes.js';
import tripRoutes from './routes/trip.routes.js';
import billRoutes from './routes/bill.routes.js';

const app = express();
const port = process.env.PORT || 5000;

// Middlewares and routes setup
app.use(express.json());
app.use(cors());  // This will enable CORS for all routes


// Use the imported routes
app.use('/api/cabs', cabRoutes);             // For routes related to Cabs
app.use('/api/drivers', driverRoutes);       // For routes related to Drivers
app.use('/api/daily-entries', dailyEntryRoutes); // For daily entries
app.use('/api/trips', tripRoutes);           // For trips
app.use('/api/bills', billRoutes);           // For bills


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
