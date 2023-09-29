import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (name, tel, password) => {


        const {data} = await $host.post('api/user/registration', {name, tel, password})
        sessionStorage.setItem('token', data.token)
        return jwt_decode(data.token)


}
export const login = async (tel, password) => {

        const {data} = await $host.post('api/user/login', {tel, password})
        sessionStorage.setItem('token', data.token)
        return jwt_decode(data.token)


}
export const check = async () => {
    try {
        const {data} = await $authHost.get('api/user/auth')
    sessionStorage.setItem('token', data.token)
    return jwt_decode(data.token)
    } catch (error) {
        console.log('checkerror = ', error);
    }
    
}

export const changeUserPass = async (obj) => {
        const { data } = await $host.patch('api/user', obj);
        sessionStorage.setItem('token', data.token)
        return jwt_decode(data.token)
}