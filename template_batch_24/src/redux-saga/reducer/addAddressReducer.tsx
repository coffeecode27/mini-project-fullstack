import * as userAction from '../constant/userConstant';

const INIT_STATE = {
    usersAddressData: [],
    addAddressLoading:false,
    addAddressSuccess:false,
    addAddressError:null,
}
const addAddressReducer = (state = INIT_STATE, action : any) => {
    switch (action.type) {
        case userAction.USER_ADD_ADDRESS_REQ:
          return {
            ...state,
            usersAddressData: [],
            addAddressLoading:true,
            addAddressSuccess:false,
            addAddressError:false,
          };
        case userAction.USER_ADD_ADDRESS_SUCCESS:
          return {
            ...state,
            usersAddressData: [...state.usersAddressData, action.payload],
            addAddressLoading:false,
            addAddressSuccess:true,
            addAddressError:false,
          };
        case userAction.USER_ADD_ADDRESS_FAIL:
          return {
            ...state,
            usersAddressData: [],
            addAddressLoading:false,
            addAddressSuccess:false,
            addAddressError:true,
          };
        default:
          return state;
      }
}







export default addAddressReducer