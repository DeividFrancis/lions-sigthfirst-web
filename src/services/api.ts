import axios from "axios";

const api = axios.create({
  baseURL: "https://lions-sigthfirst-api.onrender.com",
});

export { api };
