import express from "express";
import scheduleRoutes from "../src/routes/sheduleRoutes.js";
import { loggerMiddleware } from "./middleware/loggerMiddleware.js";

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api", scheduleRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
