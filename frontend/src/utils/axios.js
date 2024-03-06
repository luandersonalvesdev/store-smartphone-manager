import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL || 'http://localhost:3001';

console.log(API_BASE_URL);

const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default instanceAxios;
