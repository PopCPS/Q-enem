import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
})

export const backend = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

