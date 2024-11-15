import { DailyEntry, Cab, Driver } from "../models/associations.js";

// Get all daily entries with associated cab and driver details
export const getAllDailyEntries = async (req, res) => {
    try {
        const dailyEntries = await DailyEntry.findAll({
            include: [
                { model: Cab, attributes: ["name", "cabNo"] },
                { model: Driver, attributes: ["name", "licenseNo"] }
            ]
        });
        res.json(dailyEntries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single daily entry by ID with associated cab and driver details
export const getDailyEntryById = async (req, res) => {
    try {
        const dailyEntry = await DailyEntry.findByPk(req.params.id, {
            include: [
                { model: Cab, attributes: ["name", "cabNo"] },
                { model: Driver, attributes: ["name", "licenseNo"] }
            ]
        });
        dailyEntry ? res.json(dailyEntry) : res.status(404).json({ error: "Daily Entry not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new daily entry
export const createDailyEntry = async (req, res) => {
    try {
        const dailyEntry = await DailyEntry.create(req.body);
        res.status(201).json(dailyEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing daily entry
export const updateDailyEntry = async (req, res) => {
    try {
        const dailyEntry = await DailyEntry.findByPk(req.params.id);
        if (dailyEntry) {
            await dailyEntry.update(req.body);
            res.json(dailyEntry);
        } else {
            res.status(404).json({ error: "Daily Entry not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a daily entry
export const deleteDailyEntry = async (req, res) => {
    try {
        const dailyEntry = await DailyEntry.findByPk(req.params.id);
        if (dailyEntry) {
            await dailyEntry.destroy();
            res.json({ message: "Daily Entry deleted successfully" });
        } else {
            res.status(404).json({ error: "Daily Entry not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
