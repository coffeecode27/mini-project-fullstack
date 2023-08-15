import {combineReducers} from 'redux'
import userReducer from './userReducer'
import employeeReducer from './employeeReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    user: userReducer,
    employee: employeeReducer,
    login:loginReducer
})

export default rootReducer