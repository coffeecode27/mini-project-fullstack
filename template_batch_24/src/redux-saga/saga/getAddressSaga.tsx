import { call, put } from 'redux-saga/effects';
import userApi from '../../pages/api/endPointApi';
import { userGetAddressSuccess,   userGetAddressFail } from '../action/getAddressUserAction';


function* getAddress(action:any): any {
    const {payload} = action
    try {
        // Kirim permintaan ke server untuk login
        const result = yield call(userApi.getAddress, payload);
        console.log("SAGA GET ADDRESS", result)
        // yield put(userAddAddressSuccess(result.data)); // Menggunakan data yang diterima dari server
        // Kirim aksi ke reducer untuk menandakan login berhasil
        // yield put(userEditProfileSuccess(result));
    } catch (error:any) {
        // Kirim aksi ke reducer untuk menandakan login gagal
        yield put((error));
    }
}

export { getAddress };
