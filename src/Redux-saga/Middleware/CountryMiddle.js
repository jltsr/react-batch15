import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetCountrySuccess, GetCountryFailed, DelCountrySuccess,DelCountryFailed, AddCountrySuccess, AddCountryFailed, UpdateCountrySuccess, UpdateCountryFailed } from '../Action/CountryAction'

function* handleGetCountry(){
    try {
        const result = yield call(Api.listCountry)
        yield put(GetCountrySuccess(result))
    } catch (error) {
        yield put(GetCountryFailed(error))
    }
}
function* handleDelCountry(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteCountry,payload)
        yield put(DelCountrySuccess(payload))
    } catch (error) {
        yield put(DelCountryFailed(error))
    }
}

function* handleAddCountry(action){
    const {payload} = action
    try {
        const result = yield call(Api.addCountry,payload)
        yield put(AddCountrySuccess(result.data))
    } catch (error) {
        yield put(AddCountryFailed(error))
    }
}

function* handleUpdateCountry(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateCountry,payload)
        yield put(UpdateCountrySuccess(result.data))
    } catch (error) {
        yield put(UpdateCountryFailed(error))
    }
}

export {
    handleGetCountry,
    handleAddCountry,
    handleUpdateCountry,
    handleDelCountry
}