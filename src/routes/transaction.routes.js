import { Router } from "express";
import {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController.js";

const router = Router();

router.get("/", getAllTransactions); // List all transactions (expenses & salaries)
router.get("/:id", getTransactionById); // Get a single transaction by ID
router.post("/add", createTransaction); // Add a new transaction
router.post("/update/:id", updateTransaction); // Update an existing transaction
router.get("/delete/:id", deleteTransaction); // Delete a transaction

export default router;
