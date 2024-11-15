import { Router } from "express";
import {
  getAllTrips,
  getTripById,
  createTrip,
  updateTrip,
  deleteTrip,
} from "../controllers/tripController.js";

const router = Router();

router.get("/", getAllTrips); // List all trips
router.get("/:id", getTripById); // Get a single trip by ID
router.post("/add", createTrip); // Add a new trip
router.post("/update/:id", updateTrip); // Update an existing trip
router.get("/delete/:id", deleteTrip); // Delete a trip

export default router;
