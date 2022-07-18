import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetJobSuccess, GetJobFailed, DelJobSuccess,DelJobFailed, AddJobSuccess, AddJobFailed, UpdateJobSuccess, UpdateJobFailed } from '../Action/JobAction'

function* handleGetJob(){
    try {
        const result = yield call(Api.listJob)
        yield put(GetJobSuccess(result))
    } catch (error) {
        yield put(GetJobFailed(error))
    }
}
function* handleDelJob(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteJob,payload)
        yield put(DelJobSuccess(payload))
    } catch (error) {
        yield put(DelJobFailed(error))
    }
}

function* handleAddJob(action){
    const {payload} = action
    try {
        const result = yield call(Api.addJob,payload)
        yield put(AddJobSuccess(result.data))
    } catch (error) {
        yield put(AddJobFailed(error))
    }
}

function* handleUpdateJob(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateJob,payload)
        yield put(UpdateJobSuccess(result.data))
    } catch (error) {
        yield put(UpdateJobFailed(error))
    }
}

export {
    handleGetJob,
    handleAddJob,
    handleUpdateJob,
    handleDelJob
}