import { Trip, Cab, Driver } from "../models/associations.js";

// Get all trips
export const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.findAll({
            include: [
                { model: Cab, attributes: ["name", "cabNo"] },
                { model: Driver, attributes: ["name", "licenseNo"] }
            ]
        });
        res.json(trips);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get trip by ID
export const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findByPk(req.params.id, {
            include: [
                { model: Cab, attributes: ["name", "cabNo"] },
                { model: Driver, attributes: ["name", "licenseNo"] }
            ]
        });
        trip ? res.json(trip) : res.status(404).json({ error: "Trip not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a trip
export const createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json(trip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a trip
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

// Delete a trip
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
