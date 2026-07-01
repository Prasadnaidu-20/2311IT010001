import { Log } from "../logger.js";

export const loggerMiddleware = async (req, res, next) => {
    console.log("Logger middleware executed");

    await Log(
        "backend",
        "info",
        "middleware",
        "log running"
    );

    next();
};