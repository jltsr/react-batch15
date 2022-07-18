import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetDepartmentSuccess, GetDepartmentFailed, DelDepartmentSuccess,DelDepartmentFailed, AddDepartmentSuccess, AddDepartmentFailed, UpdateDepartmentSuccess, UpdateDepartmentFailed } from '../Action/DepartmentAction'

function* handleGetDepartment(){
    try {
        const result = yield call(Api.listDepartment)
        yield put(GetDepartmentSuccess(result))
    } catch (error) {
        yield put(GetDepartmentFailed(error))
    }
}
function* handleDelDepartment(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteDepartment,payload)
        yield put(DelDepartmentSuccess(payload))
    } catch (error) {
        yield put(DelDepartmentFailed(error))
    }
}

function* handleAddDepartment(action){
    const {payload} = action
    try {
        const result = yield call(Api.addDepartment,payload)
        yield put(AddDepartmentSuccess(result.data))
    } catch (error) {
        yield put(AddDepartmentFailed(error))
    }
}

function* handleUpdateDepartment(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateDepartment,payload)
        yield put(UpdateDepartmentSuccess(result.data))
    } catch (error) {
        yield put(UpdateDepartmentFailed(error))
    }
}

export {
    handleGetDepartment,
    handleAddDepartment,
    handleUpdateDepartment,
    handleDelDepartment
}