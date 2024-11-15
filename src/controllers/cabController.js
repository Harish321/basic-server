import { Cab, Trip, FuelLog, Transaction, Bill, DailyEntry } from "../models/associations.js";

// Get all cabs
export const getAllCabs = async (req, res) => {
    try {
        const cabs = await Cab.findAll({
            include: [{ model: Trip }, { model: FuelLog }]
        });
        res.json(cabs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get cab by ID with associated data
export const getCabById = async (req, res) => {
    try {
        const cab = await Cab.findByPk(req.params.id, {
            include: [
                { model: Trip },
                { model: FuelLog },
                { model: Transaction },
                { model: Bill },
                { model: DailyEntry }
            ]
        });
        cab ? res.json(cab) : res.status(404).json({ error: "Cab not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a cab
export const createCab = async (req, res) => {
    try {
        const cab = await Cab.create(req.body);
        res.status(201).json(cab);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a cab
export const updateCab = async (req, res) => {
    try {
        const cab = await Cab.findByPk(req.params.id);
        if (cab) {
            await cab.update(req.body);
            res.json(cab);
        } else {
            res.status(404).json({ error: "Cab not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a cab
export const deleteCab = async (req, res) => {
    try {
        const cab = await Cab.findByPk(req.params.id);
        if (cab) {
            await cab.destroy();
            res.json({ message: "Cab deleted successfully" });
        } else {
            res.status(404).json({ error: "Cab not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
