import axios from 'axios'


export const SERVER_PATH = 'http://localhost:3000/'

export const getProductList = (params = {}) => {
        const { page = 1, rangePrice, brands, limit = 9, sortByPrice, sizes } = params

        return axios.get(`${SERVER_PATH}api/product`, {
           params: { page, limit, brands, rangePrice, sortByPrice, sizes }     
        })
}

export const getProductDetail = (id) => {
        return axios.get(`${SERVER_PATH}api/product/${id}`)    
}

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

export const checkAuth = () => {
        const token = localStorage.getItem('token')

        return axios.get(`${SERVER_PATH}api/user/auth`, { headers: {"Authorization" : `Bearer ${token}`} })
}

export const login = (params) => {
        const { username, password } = params

        return axios.post(`${SERVER_PATH}api/user/login`, { email: username, password })
}

export const registration = (params) => {
        const { username, password } = params

        return axios.post(`${SERVER_PATH}api/user/registration`, { email: username, password })
}

export const updateUser = (params) => {
        const token = localStorage.getItem('token')
  
        const { username: email, password, id } = params

        return axios.put(`${SERVER_PATH}api/user/update`, 
                { email, password, id }, 
                { headers: {"Authorization" : `Bearer ${token}`} }
        ) 
}