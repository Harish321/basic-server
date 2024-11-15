import DailyEntry from "../models/DailyEntry.js";

// Get all daily entries
export const getAllDailyEntries = async (req, res) => {
    try {
        const dailyEntries = await DailyEntry.findAll();
        res.json(dailyEntries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single daily entry by ID
export const getDailyEntryById = async (req, res) => {
    try {
        const dailyEntry = await DailyEntry.findByPk(req.params.id);
        dailyEntry ? res.json(dailyEntry) : res.status(404).json({ error: "Daily entry not found" });
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
            res.status(404).json({ error: "Daily entry not found" });
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
            res.json({ message: "Daily entry deleted successfully" });
        } else {
            res.status(404).json({ error: "Daily entry not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
