import Driver from "../models/Driver.js";

export const getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.json(drivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDriverById = async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        driver ? res.json(driver) : res.status(404).json({ error: "Driver not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createDriver = async (req, res) => {
    try {
        const driver = await Driver.create(req.body);
        res.status(201).json(driver);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateDriver = async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (driver) {
            await driver.update(req.body);
            res.json(driver);
        } else {
            res.status(404).json({ error: "Driver not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteDriver = async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (driver) {
            await driver.destroy();
            res.json({ message: "Driver deleted successfully" });
        } else {
            res.status(404).json({ error: "Driver not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
