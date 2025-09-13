import axios from "axios";

const baseURL = "https://api.orbitbd.net/api";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Request interceptors for logging or adding default parameters
api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // console.log('Request sent:', config);
    return config;
  },
  (error) => {
    // Do something with request error
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Optional: Response interceptors for handling errors globally
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error("Response error:", error);
    // You can add global error handling logic here, e.g., showing a notification
    return Promise.reject(error);
  }
);

export default api;
