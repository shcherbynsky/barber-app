import axios from 'axios'

// export const BASE_URL = "http://localhost:5000/"
// const REACT_APP_API_URL = "http://localhost:5000/"

export const BASE_URL = "https://barber-server.vercel.app/"
const REACT_APP_API_URL = "https://barber-server.vercel.app/"


const $host = axios.create({
    baseURL: REACT_APP_API_URL
    // baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: REACT_APP_API_URL
    // baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${sessionStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,

}
