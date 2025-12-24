/* client/src/api/axios.js */
import axios from 'axios';

// Production Update: Use Vite environment variable for the API URL.
// When building for Docker, pass: VITE_API_BASE_URL=https://api.yourdomain.com/api
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // SECURITY UPDATE: Check SESSION STORAGE
    const token = sessionStorage.getItem('access_token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;