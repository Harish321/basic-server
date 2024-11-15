import Cab from "./Cab.js";
import Driver from "./Driver.js";
import Trip from "./Trip.js";
import Transaction from "./Transaction.js";
import FuelLog from "./FuelLog.js";
import Bill from "./Bill.js";
import DailyEntry from "./DailyEntry.js";

// Associations
Cab.hasMany(Trip, { foreignKey: "cabId" });
Driver.hasMany(Trip, { foreignKey: "driverId" });
Cab.hasMany(FuelLog, { foreignKey: "cabId" });
Cab.hasMany(Transaction, { foreignKey: "cabId" });
Cab.hasMany(Bill, { foreignKey: "cabId" });
Cab.hasMany(DailyEntry, { foreignKey: "cabId" });
Driver.hasMany(DailyEntry, { foreignKey: "driverId" });

export { Cab, Driver, Trip, Transaction, FuelLog, Bill, DailyEntry };
