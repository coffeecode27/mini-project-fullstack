import * as userAction from '../constant/userConstant';

export const userAddAddressReq = (payload:any) =>({
    type : userAction.USER_ADD_ADDRESS_REQ,
    payload
})
export const userAddAddressSuccess = (payload:any) =>({
    type : userAction.USER_ADD_ADDRESS_SUCCESS,
    payload
})
export const userAddAddressFail = (payload:any) =>({
    type : userAction.USER_ADD_ADDRESS_FAIL,
    payload
})
