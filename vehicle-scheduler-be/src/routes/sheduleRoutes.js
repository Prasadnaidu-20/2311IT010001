import express from "express";
import { generateSchedule } from "../controllers/sheduleController.js";

const router = express.Router();

// Generate optimal maintenance schedule
router.get("/schedule", generateSchedule);

export default router;