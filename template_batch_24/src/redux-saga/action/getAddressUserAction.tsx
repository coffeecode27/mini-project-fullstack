import * as userAction from '../constant/userConstant';

export const userGetAddressReq = (payload:any) =>({
    type : userAction.USER_GET_ADDRESS_REQ,
    payload
})
export const userGetAddressSuccess = (payload:any) =>({
    type : userAction.USER_GET_ADDRESS_SUCCESS,
    payload
})
export const userGetAddressFail = (payload:any) =>({
    type : userAction.USER_GET_ADDRESS_FAIL,
    payload
})