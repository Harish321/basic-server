import { Router } from "express";
import {
  getAllFuelLogs,
  getFuelLogById,
  createFuelLog,
  updateFuelLog,
  deleteFuelLog,
} from "../controllers/fuelLogController.js";

const router = Router();

router.get("/", getAllFuelLogs); // List all fuel logs
router.get("/:id", getFuelLogById); // Get a single fuel log by ID
router.post("/add", createFuelLog); // Add a new fuel log
router.post("/update/:id", updateFuelLog); // Update an existing fuel log
router.get("/delete/:id", deleteFuelLog); // Delete a fuel log

export default router;
