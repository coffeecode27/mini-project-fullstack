// loginSaga.js
import { call, put } from 'redux-saga/effects';
import userApi from '../../pages/api/endPointApi';
import { userLoginSuccess, userLoginFail } from '../action/loginAction';
import { setCookie } from 'cookies-next';

function* loginSaga(action:any): any {
    const { userData } = action;
    try {
        // Kirim permintaan ke server untuk login
        const result = yield call(userApi.userLogin, userData);
        // console.log("SAGA LOGIN SUCCESS", result)
        const tokenResult = result.data.access_token
        // console.log("SAGA LOGIN SUCCESS", tokenResult)
        // Jika login berhasil, simpan token ke session storage/cookie
         // Kirim aksi ke reducer untuk menandakan login berhasil
         yield put(userLoginSuccess(tokenResult));
         setCookie('access_token', tokenResult);
        // sessionStorage.setItem('access_token', tokenResult);

    } catch (error) {
        // Kirim aksi ke reducer untuk menandakan login gagal
        yield put(userLoginFail({ message: 'Invalid username or password' }));
    }
}

export { loginSaga };
