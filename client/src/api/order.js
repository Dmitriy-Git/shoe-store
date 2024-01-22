import axios from 'axios'
import { SERVER_PATH } from '../const'

export const createOrder = (params) => {
    return axios.post(`${SERVER_PATH}api/order`, { ...params })
}

export const getOrder = (userId) => {
    return axios.get(`${SERVER_PATH}api/order`, {
            params: { userId }
    })
}

export const deleteOrder = (orderId) => {
    return axios.delete(`${SERVER_PATH}api/order`, { data: { orderId } })  
}