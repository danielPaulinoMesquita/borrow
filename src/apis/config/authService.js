import axios from 'axios';
import {api} from "./axiosConfigs";

const API_BASE_URL = 'http://localhost:8080/api/v1/auth'; // Replace with your actual API URL

const authService = {
    login: async ({email, password}) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, {
                email,
                password,
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },

    login2: async (user) => {
        try {
            const response = await api.request({
                url: `/authenticate`,
                method: "POST",
                data: user,
            })
            return response.data;
        } catch (error) {
            console.log('error', error)
            throw new Error(error.response.data.message);
        }
    },

    register: async (username, password, email) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, {
                username,
                password,
                email,
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },

    // Add more authentication-related functions as needed
};

export default authService;