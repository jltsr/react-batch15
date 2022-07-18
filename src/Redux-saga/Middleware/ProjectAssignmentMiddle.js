import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetAssignmentSuccess, GetAssignmentFailed, DelAssignmentSuccess,DelAssignmentFailed, AddAssignmentSuccess, AddAssignmentFailed, UpdateAssignmentSuccess, UpdateAssignmentFailed } from '../Action/ProjectAssignmentAction'

function* handleGetAssignment(){
    try {
        const result = yield call(Api.listAssignment)
        yield put(GetAssignmentSuccess(result))
    } catch (error) {
        yield put(GetAssignmentFailed(error))
    }
}
function* handleDelAssignment(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteAssignment,payload)
        yield put(DelAssignmentSuccess(payload))
    } catch (error) {
        yield put(DelAssignmentFailed(error))
    }
}

function* handleAddAssignment(action){
    const {payload} = action
    try {
        const result = yield call(Api.addAssignment,payload)
        yield put(AddAssignmentSuccess(result.data))
    } catch (error) {
        yield put(AddAssignmentFailed(error))
    }
}

function* handleUpdateAssignment(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateAssignment,payload)
        yield put(UpdateAssignmentSuccess(result.data))
    } catch (error) {
        yield put(UpdateAssignmentFailed(error))
    }
}

export {
    handleGetAssignment,
    handleAddAssignment,
    handleUpdateAssignment,
    handleDelAssignment
}