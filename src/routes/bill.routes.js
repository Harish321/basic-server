import { Router } from "express";
import {
  getAllBills,
  getBillById,
  createBill,
  updateBill,
  deleteBill,
} from "../controllers/billController.js";

const router = Router();

router.get("/", getAllBills); // List all bills
router.get("/:id", getBillById); // Get a single bill by ID
router.post("/add", createBill); // Add a new bill
router.post("/update/:id", updateBill); // Update an existing bill
router.get("/delete/:id", deleteBill); // Delete a bill

export default router;
