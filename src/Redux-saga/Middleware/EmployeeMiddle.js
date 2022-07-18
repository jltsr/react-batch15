import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetEmployeeSuccess, GetEmployeeFailed, DelEmployeeSuccess,DelEmployeeFailed, AddEmployeeSuccess, AddEmployeeFailed, UpdateEmployeeSuccess, UpdateEmployeeFailed } from '../Action/EmployeeAction'

function* handleGetEmployee(){
    try {
        const result = yield call(Api.listEmployee)
        yield put(GetEmployeeSuccess(result))
    } catch (error) {
        yield put(GetEmployeeFailed(error))
    }
}
function* handleDelEmployee(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteEmployee,payload)
        yield put(DelEmployeeSuccess(payload))
    } catch (error) {
        yield put(DelEmployeeFailed(error))
    }
}

function* handleAddEmployee(action){
    const {payload} = action
    try {
        const result = yield call(Api.addEmployee,payload)
        yield put(AddEmployeeSuccess(result.data))
    } catch (error) {
        yield put(AddEmployeeFailed(error))
    }
}

function* handleUpdateEmployee(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateEmployee,payload)
        yield put(UpdateEmployeeSuccess(result.data))
    } catch (error) {
        yield put(UpdateEmployeeFailed(error))
    }
}

export {
    handleGetEmployee,
    handleAddEmployee,
    handleUpdateEmployee,
    handleDelEmployee
}