import {api} from "./axiosConfigs";

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
            throw new Error(error.response.data.message);
        }
    },

    register: async (name, documentNumber, email, password) => {
        try {
            const response = await api.request({
                url: '/auth/register',
                method: "POST",
                data: {
                    name,
                    documentNumber,
                    email,
                    password
                }
            })
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
};

export default authService;