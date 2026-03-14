// api.js
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://calonmantu.sbs',
    timeout: 10000,
})

// Interceptor untuk menambahkan token ke setiap request
api.interceptors.request.use(
    config => {
        // Ambil token dari localStorage, sessionStorage, atau cookie
        const token = localStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default api
