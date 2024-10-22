import axios from "axios";

export const enem = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
})

export const api = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:3333`
})

