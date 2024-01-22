import axios from 'axios'
import { SERVER_PATH } from '../const'

export const addProductToCart = (params) => {
    const { userId, productId, size } = params

    return axios.post(`${SERVER_PATH}api/basket`, { size, userId, productId })
}

export const getCart = (userId) => {
    return axios.get(`${SERVER_PATH}api/basket`, {
            params: { userId }
    })
}

export const deleteProductToCart = (params) => {
    const { userId, id } = params

    return axios.delete(`${SERVER_PATH}api/basket`, {
            data: { userId, id }
    })      
}

export const deleteProductsToCart = (data) => {
    return axios.delete(`${SERVER_PATH}api/basket/all`, { data })  
}