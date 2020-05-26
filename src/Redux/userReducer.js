import axios from 'axios'

const
    REGISTER_USER = 'REGISTER_USER',
    LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    GET_USER = 'GET_USER';

const initialState = {
    date: null,
    loading: false
}

export default function (state = initialState, action) {
    let { type, payload } = action

    switch (type) {

        case REGISTER_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case REGISTER_USER + 'FULLFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case REGISTER_USER + 'REJECTED':
            return {
                ...state,
                loading: false
            }

        case LOGIN_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case LOGIN_USER + '_REJECTED':
            return {
                ...state,
                loading: false
            }

        case LOGOUT_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case LOGOUT_USER + '_FULFILLED':
            return {
                ...state,
                data: null,
                loading: false
            }
        case LOGOUT_USER + '_REJECTED':
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export function register(userInfo){
    return{
        type:REGISTER_USER,
        payload:axios.post('/api/register', userInfo)
    }
}

export function login(userInfo){
    return{
        type:LOGIN_USER,
        payload:axios.post('/api/login', userInfo)
    }
}

export function logout(){
    return{
        type:LOGOUT_USER,
        payload:axios.post('/api/logout')
    }
}

export function userSession(){
    let user= axios.get('/api/user_session').then(res =>res.data)
    console.log("from redux: ", user)
    return{
        type:GET_USER,
        payload:user
    }
}