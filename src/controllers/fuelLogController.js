import { FuelLog, Cab } from "../models/associations.js";

// Get all fuel logs
export const getAllFuelLogs = async (req, res) => {
    try {
        const fuelLogs = await FuelLog.findAll({
            include: [{ model: Cab, attributes: ["name", "cabNo"] }]
        });
        res.json(fuelLogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get fuel log by ID
export const getFuelLogById = async (req, res) => {
    try {
        const fuelLog = await FuelLog.findByPk(req.params.id, {
            include: [{ model: Cab, attributes: ["name", "cabNo"] }]
        });
        fuelLog ? res.json(fuelLog) : res.status(404).json({ error: "Fuel log not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a fuel log
export const createFuelLog = async (req, res) => {
    try {
        const fuelLog = await FuelLog.create(req.body);
        res.status(201).json(fuelLog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a fuel log
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
