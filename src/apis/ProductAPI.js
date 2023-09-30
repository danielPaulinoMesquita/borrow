// todo I need to study https://semaphoreci.com/blog/api-layer-react

import {api} from "./config/axiosConfigs";

export const ProductAPI = {
    get: async function (id, cancel = false) {
        const response = await api.request({
            url: `/products/:id`,
            method: "GET",
            // retrieving the signal value by using the property name
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        // returning the product returned by the API
        return response.data.product
    },
    getAll: async function (cancel = false) {
        const response = await api.request({
            url: "/products/",
            method: "GET",
            signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,
        })

        return response.data.products
    },
    search: async function (name, cancel = false) {
        const response = await api.request({
            url: "/products/search",
            method: "GET",
            params: {
                name: name,
            },
            signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
        })

        return response.data.products
    },
    create: async function (product, cancel = false) {
        await api.request({
            url: `/products`,
            method: "POST",
            data: product,
            signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
        })
    },
}
