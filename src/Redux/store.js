import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import users from './userReducer'

export default createStore (users, applyMiddleware(promiseMiddleware))