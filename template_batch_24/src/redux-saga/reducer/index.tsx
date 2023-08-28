import {combineReducers} from 'redux'
import userReducer from './userReducer'
import employeeReducer from './employeeReducer'
import loginReducer from './loginReducer'
import editProfileReducer from './editProfileReducer'
import addAddressReducer from './addAddressReducer'
const rootReducer = combineReducers({
    user: userReducer,
    employee: employeeReducer,
    login:loginReducer,
    editProfile:editProfileReducer,
    addAddress: addAddressReducer
})

export default rootReducer