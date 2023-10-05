// todo I need to study https://semaphoreci.com/blog/api-layer-react

import {api} from "./config/axiosConfigs";

export const ProductAPI = {
    get: async function (id ) {
        const response = await api.request({
            url: `/products/:id`,
            method: "GET",
        })

        return response.data
    },
    getAll: async function (cancel = false) {
        const response = await api.request({
            url: "/products/",
            method: "GET",
        })

        return response.data
    },
    search: async function (name) {
        const response = await api.request({
            url: "/products/search",
            method: "GET",
            params: {
                name: name,
            },
        })

        return response.data
    },
    create: async function (product) {
        await api.request({
            url: `/products`,
            method: "POST",
            data: product,
        })
    },
}
