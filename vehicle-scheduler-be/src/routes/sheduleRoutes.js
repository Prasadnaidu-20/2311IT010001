import express from "express";
import { generateSchedule } from "../controllers/sheduleController.js";

const router = express.Router();

router.get("/schedule", generateSchedule);

export default router;
