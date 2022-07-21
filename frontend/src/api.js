import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': true,
  },
  baseURL: "http://localhost:4000/api",
});

export default api;
