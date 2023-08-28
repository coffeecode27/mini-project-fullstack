import { call, put } from 'redux-saga/effects';
import userApi from '../../pages/api/endPointApi';
import { userAddAddressSuccess, userAddAddressFail } from '../action/addAddressUserAction';


function* addAddress(action:any): any {
    const {payload} = action
    try {
        // Kirim permintaan ke server untuk login
        const result = yield call(userApi.addAddress, payload);
        // console.log("SAGA ADD ADDRESS", result.data)
        yield put(userAddAddressSuccess(result.data)); // Menggunakan data yang diterima dari server
    } catch (error) {
        // Kirim aksi ke reducer untuk menandakan login gagal
        yield put(userAddAddressFail(error));
    }
}

export { addAddress };
