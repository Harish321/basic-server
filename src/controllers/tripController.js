import Trip from "../models/Trip.js";

export const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.findAll();
        res.json(trips);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findByPk(req.params.id);
        trip ? res.json(trip) : res.status(404).json({ error: "Trip not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json(trip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTrip = async (req, res) => {
    try {
        const trip = await Trip.findByPk(req.params.id);
        if (trip) {
            await trip.update(req.body);
            res.json(trip);
        } else {
            res.status(404).json({ error: "Trip not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findByPk(req.params.id);
        if (trip) {
            await trip.destroy();
            res.json({ message: "Trip deleted successfully" });
        } else {
            res.status(404).json({ error: "Trip not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
