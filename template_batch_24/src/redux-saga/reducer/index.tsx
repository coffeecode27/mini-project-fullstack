import {combineReducers} from 'redux'
import userReducer from './userReducer'
import employeeReducer from './employeeReducer'
import loginReducer from './loginReducer'
import editProfileReducer from './editProfileReducer'
const rootReducer = combineReducers({
    user: userReducer,
    employee: employeeReducer,
    login:loginReducer,
    editProfile:editProfileReducer
})

export default rootReducer