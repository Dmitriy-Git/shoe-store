import axios from 'axios'
import { SERVER_PATH } from '../const'

export const getProductList = (params = {}) => {
        const { page = 1, rangePrice, brands, limit = 9, sortByPrice, sizes } = params

        return axios.get(`${SERVER_PATH}api/product`, {
           params: { page, limit, brands, rangePrice, sortByPrice, sizes }     
        })
}

export const getProductDetail = (id) => {
        return axios.get(`${SERVER_PATH}api/product/${id}`)    
}