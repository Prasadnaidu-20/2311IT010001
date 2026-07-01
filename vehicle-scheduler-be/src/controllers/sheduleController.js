import { Log } from "../logger.js";

export const generateSchedule = async (req, res) => {
    try {
        await Log(
            "backend",
            "info",
            "controller",
            "Schedule generation request received"
        );

        res.status(200).json({
            success: true,
            message: "Vehicle Scheduler API is working.",
            data: []
        });

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};