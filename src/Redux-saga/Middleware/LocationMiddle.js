import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetLocationSuccess, GetLocationFailed, DelLocationSuccess,DelLocationFailed, AddLocationSuccess, AddLocationFailed, UpdateLocationSuccess, UpdateLocationFailed } from '../Action/LocationAction'

function* handleGetLocation(){
    try {
        const result = yield call(Api.listLocation)
        yield put(GetLocationSuccess(result))
    } catch (error) {
        yield put(GetLocationFailed(error))
    }
}
function* handleDelLocation(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteLocation,payload)
        yield put(DelLocationSuccess(payload))
    } catch (error) {
        yield put(DelLocationFailed(error))
    }
}

function* handleAddLocation(action){
    const {payload} = action
    try {
        const result = yield call(Api.addLocation,payload)
        yield put(AddLocationSuccess(result.data))
    } catch (error) {
        yield put(AddLocationFailed(error))
    }
}

function* handleUpdateLocation(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateLocation,payload)
        yield put(UpdateLocationSuccess(result.data))
    } catch (error) {
        yield put(UpdateLocationFailed(error))
    }
}

export {
    handleGetLocation,
    handleAddLocation,
    handleUpdateLocation,
    handleDelLocation
}