import axios from "axios";

export  const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "4455a763-b4dd-4a16-8d42-e79249229fad",
  },
});