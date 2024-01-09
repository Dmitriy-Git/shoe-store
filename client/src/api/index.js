import axios from 'axios'


export const SERVER_PATH = 'http://localhost:3000/'

export const getProductList = (params = {}) => {
        const { page = 1, rangePrice, brands, limit = 9, sortByPrice } = params

        return axios.get(`${SERVER_PATH}api/product`, {
           params: { page, limit, brands, rangePrice, sortByPrice }     
        })
}

export const getProductDetail = (id) => {
        return axios.get(`${SERVER_PATH}api/product/${id}`)    
}

export const addProductToCart = (params) => {
        const { userId, productId, size } = params

        return axios.post(`${SERVER_PATH}api/basket`, { size, userId, productId })
}

export const getCart = (userId = 1) => {
        return axios.get(`${SERVER_PATH}api/basket`, {
                params: { userId }
        })
}

export const deleteProductToCart = (params) => {
        const { userId, productId } = params

        return axios.delete(`${SERVER_PATH}api/basket`, {
                data: { userId, productId }
        })      
}