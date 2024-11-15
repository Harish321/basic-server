import { Router } from "express";
import {
  getAllCabs,
  getCabById,
  createCab,
  updateCab,
  deleteCab,
} from "../controllers/cabController.js";

const router = Router();

router.get("/", getAllCabs); // List all cabs
router.get("/:id", getCabById); // Get a single cab by ID
router.post("/add", createCab); // Add a new cab
router.post("/update/:id", updateCab); // Update an existing cab
router.get("/delete/:id", deleteCab); // Delete a cab

export default router;
