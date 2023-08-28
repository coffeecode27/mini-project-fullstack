import {takeEvery,all} from 'redux-saga/effects'
import * as userAction from '../constant/userConstant';
import {getAllUser, getOneUser, signUpUser } from './userSaga'
import { signUpEmployee, getAllEmployee } from './employeeSaga'
import { loginSaga } from './loginSaga'
import { editProfile } from './editProfileSaga';
import { addAddress } from './addAddressSaga';
import {getAddress} from './getAddressSaga'

function* watchAll(){
    yield all([
        takeEvery(userAction.USER_SIGNUP_REQ,signUpUser),
        takeEvery(userAction.GET_ALL_USER_REQ,getAllUser),
        takeEvery(userAction.GET_ONE_USER_REQ,getOneUser),
        takeEvery(userAction.EMPLOYEE_SIGNUP_REQ,signUpEmployee),
        takeEvery(userAction.GET_ALL_EMPLOYEE_REQ,getAllEmployee),
        takeEvery(userAction.USER_LOGIN_REQ, loginSaga),
        takeEvery(userAction.USER_EDIT_PROFILE_REQ, editProfile),
        takeEvery(userAction.USER_ADD_ADDRESS_REQ, addAddress),
        takeEvery(userAction.USER_GET_ADDRESS_REQ, getAddress),
    ])
}

export default watchAll