// todo I need to study https://semaphoreci.com/blog/api-layer-react

import {api} from "./config/axiosConfigs";

export const CustomerAPI = {
    get: async function (documentNumber) {
        const response = await api.request({
            url: `/customer/:documentNumber`,
            method: "GET",
        })

        return response.data
    },
    create: async function (customer) {
        await api.request({
            url: `/customer`,
            method: "POST",
            data: customer,
        })
    },
}
