import axios from "axios";

const api = axios.create({
    baseURL: process.env.BACKEND || "http://localhost:3030",
});

export default api;
