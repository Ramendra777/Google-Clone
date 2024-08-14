import axios from "axios";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyDhxBORdogQz92F9HDoI84J4454W2qht40", // Ensure correct environment variable naming
    cx: "e5a60857b049c47d4",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};