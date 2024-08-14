import axios from "axios";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "YOUR_API_KEY", // Ensure correct environment variable naming
    cx: "YOUR_CX_KEY",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};