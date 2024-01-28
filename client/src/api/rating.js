import axios from 'axios'
import { SERVER_PATH } from '../const'

export const getProductRatingForUser = (params = {}) => {
    const { productId, userId } = params

    return axios.get(`${SERVER_PATH}api/rating`, {
       params: { productId, userId }     
    })
}

export const createProductRating = (params) => {
    console.log(params, 'params')

    return axios.post(`${SERVER_PATH}api/rating`, { ...params })
}

export const deleteProductRatingForUser = (data) => {
    return axios.delete(`${SERVER_PATH}api/rating`, { data })  
}