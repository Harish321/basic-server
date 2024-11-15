import FuelLog from "../models/FuelLog.js";

// Get all fuel logs
export const getAllFuelLogs = async (req, res) => {
    try {
        const fuelLogs = await FuelLog.findAll();
        res.json(fuelLogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single fuel log by ID
export const getFuelLogById = async (req, res) => {
    try {
        const fuelLog = await FuelLog.findByPk(req.params.id);
        fuelLog ? res.json(fuelLog) : res.status(404).json({ error: "Fuel log not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new fuel log
export const createFuelLog = async (req, res) => {
    try {
        const fuelLog = await FuelLog.create(req.body);
        res.status(201).json(fuelLog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing fuel log
export const updateFuelLog = async (req, res) => {
    try {
        const fuelLog = await FuelLog.findByPk(req.params.id);
        if (fuelLog) {
            await fuelLog.update(req.body);
            res.json(fuelLog);
        } else {
            res.status(404).json({ error: "Fuel log not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a fuel log
export const deleteFuelLog = async (req, res) => {
    try {
        const fuelLog = await FuelLog.findByPk(req.params.id);
        if (fuelLog) {
            await fuelLog.destroy();
            res.json({ message: "Fuel log deleted successfully" });
        } else {
            res.status(404).json({ error: "Fuel log not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
