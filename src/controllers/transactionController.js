import { Transaction, Cab, Trip } from "../models/associations.js";

// Get all transactions with associated cab and trip details
export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({
            include: [
                { model: Cab, attributes: ["name", "cabNo"] },
                { model: Trip, attributes: ["startLocation", "endLocation"] }
            ]
        });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single transaction by ID with associated cab and trip details
export const getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id, {
            include: [
                { model: Cab, attributes: ["name", "cabNo"] },
                { model: Trip, attributes: ["startLocation", "endLocation"] }
            ]
        });
        transaction
            ? res.json(transaction)
            : res.status(404).json({ error: "Transaction not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new transaction
export const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing transaction
export const updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            await transaction.update(req.body);
            res.json(transaction);
        } else {
            res.status(404).json({ error: "Transaction not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a transaction
export const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (transaction) {
            await transaction.destroy();
            res.json({ message: "Transaction deleted successfully" });
        } else {
            res.status(404).json({ error: "Transaction not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
