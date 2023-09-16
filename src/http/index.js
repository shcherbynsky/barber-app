import axios from 'axios'

// console.log(process.env.REACT_APP_API_URL);
// export const BASE_URL = "http://localhost:5000/"
// const REACT_APP_API_URL = "http://localhost:5000/"

export const BASE_URL = "https://material-serv-4e12e02d9e3b.herokuapp.com//"
const REACT_APP_API_URL = "https://material-serv-4e12e02d9e3b.herokuapp.com//"
// export const BASE_URL = "https://barber-book-app-31a74090aa3c.herokuapp.com/"
// const REACT_APP_API_URL = "https://barber-book-app-31a74090aa3c.herokuapp.com/"

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
