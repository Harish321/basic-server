import { Router } from "express";
import {
  getAllDailyEntries,
  getDailyEntryById,
  createDailyEntry,
  updateDailyEntry,
  deleteDailyEntry,
} from "../controllers/dailyEntryController.js";

const router = Router();

router.get("/", getAllDailyEntries); // List all daily entries
router.get("/:id", getDailyEntryById); // Get a single daily entry by ID
router.post("/add", createDailyEntry); // Add a new daily entry
router.post("/update/:id", updateDailyEntry); // Update an existing daily entry
router.get("/delete/:id", deleteDailyEntry); // Delete a daily entry

export default router;
