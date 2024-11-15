import { Router } from "express";
import {
  getAllDrivers,
  getDriverById,
  createDriver,
  updateDriver,
  deleteDriver,
} from "../controllers/driverController.js";

const router = Router();

router.get("/", getAllDrivers); // List all drivers
router.get("/:id", getDriverById); // Get a single driver by ID
router.post("/add", createDriver); // Add a new driver
router.post("/update/:id", updateDriver); // Update an existing driver
router.get("/delete/:id", deleteDriver); // Delete a driver

export default router;
