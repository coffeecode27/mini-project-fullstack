import * as userAction from '../constant/userConstant';

const INIT_STATE = {
    isLoggedIn: false,
    currentUser: null,
    loginFail: false,
    // ... properti lain yang berkaitan dengan proses login
};

const loginReducer = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case userAction.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.result,
                loginFail: false, // Reset loginFail saat login sukses
            };
        case userAction.USER_LOGIN_FAIL:
            return {
                ...state,
                loginFail: action.error,
            };

        default:
            return state;
    }
};

export default loginReducer;
