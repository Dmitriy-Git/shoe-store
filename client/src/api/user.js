import axios from 'axios'
import { SERVER_PATH } from '../const'

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