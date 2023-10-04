import axios from 'axios';
import {api} from "./axiosConfigs";

const API_BASE_URL = 'http://localhost:8080/api/v1/auth'; // Replace with your actual API URL

const authService = {
    login: async (user) => {
        try {
            const response = await api.request({
                url: `/auth/authenticate`,
                method: "POST",
                data: user,
            })
            return response.data;
        } catch (error) {
            console.log('error', error)
            throw new Error(error.response.data.message);
        }
    },

    register: async (firstName, lastName, email, password) => {
        try {
            const response = await api.request({
                url: '/auth/register',
                method: "POST",
                data: {
                    firstName,
                    lastName,
                    email,
                    password
                }
            })
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },

    // Add more authentication-related functions as needed
};

export default authService;