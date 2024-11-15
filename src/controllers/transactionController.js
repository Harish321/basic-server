import Transaction from "../models/Transaction.js";

export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        transaction ? res.json(transaction) : res.status(404).json({ error: "Transaction not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
