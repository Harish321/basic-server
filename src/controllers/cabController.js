import Cab from "../models/Cab.js";

// Get all cabs
export const getAllCabs = async (req, res) => {
    try {
        const cabs = await Cab.findAll();
        res.json(cabs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single cab by ID
export const getCabById = async (req, res) => {
    try {
        const cab = await Cab.findByPk(req.params.id);
        cab ? res.json(cab) : res.status(404).json({ error: "Cab not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new cab
export const createCab = async (req, res) => {
    try {
        const cab = await Cab.create(req.body);
        res.status(201).json(cab);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing cab
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
