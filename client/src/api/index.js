import axios from 'axios'


export const SERVER_PATH = 'http://localhost:3000/'

export const getProductList = (params = {}) => {
        const { page = 1, rangePrice, brands, limit = 9 } = params

        return axios.get(`${SERVER_PATH}api/product`, {
           params: { 
                page, 
                limit,
                rangePrice: rangePrice || undefined, 
                brands: brands || undefined, 
           }     
        })
}