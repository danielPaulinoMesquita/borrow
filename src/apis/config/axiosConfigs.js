import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true
})

// defining a custom error handler for all APIs
const errorHandler = (error) => {
    const statusCode = error.response?.status

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    // logging only errors that are not 403
    if (statusCode && statusCode !== 403) {
        console.error(error)
    }

    return Promise.reject(error)
}

// Add an interceptor to attach the authentication token to each request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); // Retrieve the authentication token from wherever you store it
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})