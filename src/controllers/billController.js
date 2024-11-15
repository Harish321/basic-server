import Bill from "../models/Bill.js";

// Get all bills
export const getAllBills = async (req, res) => {
    try {
        const bills = await Bill.findAll();
        res.json(bills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single bill by ID
export const getBillById = async (req, res) => {
    try {
        const bill = await Bill.findByPk(req.params.id);
        bill ? res.json(bill) : res.status(404).json({ error: "Bill not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new bill
export const createBill = async (req, res) => {
    try {
        const bill = await Bill.create(req.body);
        res.status(201).json(bill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an existing bill
export const updateBill = async (req, res) => {
    try {
        const bill = await Bill.findByPk(req.params.id);
        if (bill) {
            await bill.update(req.body);
            res.json(bill);
        } else {
            res.status(404).json({ error: "Bill not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a bill
export const deleteBill = async (req, res) => {
    try {
        const bill = await Bill.findByPk(req.params.id);
        if (bill) {
            await bill.destroy();
            res.json({ message: "Bill deleted successfully" });
        } else {
            res.status(404).json({ error: "Bill not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
