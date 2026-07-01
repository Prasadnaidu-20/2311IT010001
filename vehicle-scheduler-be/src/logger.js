import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

export const Log = async (stack, level, packageName, message) => {
    try {
        const response = await axios.post(
            LOG_API,
            {
                stack,
                level,
                package: packageName,
                message,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Log Created:", response.data);

        return response.data;

    } catch (error) {

        console.log("Logging Failed");

        if (error.response) {
            console.log("Status:", error.response.status);
            console.log("Data:", error.response.data);
        } else {
            console.log(error.message);
        }

        return null;
    }
};