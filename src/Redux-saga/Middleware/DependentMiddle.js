import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetDependentSuccess, GetDependentFailed, DelDependentSuccess,DelDependentFailed, AddDependentSuccess, AddDependentFailed, UpdateDependentSuccess, UpdateDependentFailed } from '../Action/DependentAction'

function* handleGetDependent(){
    try {
        const result = yield call(Api.listDependent)
        yield put(GetDependentSuccess(result))
    } catch (error) {
        yield put(GetDependentFailed(error))
    }
}
function* handleDelDependent(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteDependent,payload)
        yield put(DelDependentSuccess(payload))
    } catch (error) {
        yield put(DelDependentFailed(error))
    }
}

function* handleAddDependent(action){
    const {payload} = action
    try {
        const result = yield call(Api.addDependent,payload)
        yield put(AddDependentSuccess(result.data))
    } catch (error) {
        yield put(AddDependentFailed(error))
    }
}

function* handleUpdateDependent(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateDependent,payload)
        yield put(UpdateDependentSuccess(result.data))
    } catch (error) {
        yield put(UpdateDependentFailed(error))
    }
}

export {
    handleGetDependent,
    handleAddDependent,
    handleUpdateDependent,
    handleDelDependent
}