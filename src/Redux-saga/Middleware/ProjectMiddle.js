import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetProjectSuccess, GetProjectFailed, DelProjectSuccess,DelProjectFailed, AddProjectSuccess, AddProjectFailed, UpdateProjectSuccess, UpdateProjectFailed } from '../Action/ProjectAction'

function* handleGetProject(){
    try {
        const result = yield call(Api.listProject)
        yield put(GetProjectSuccess(result))
    } catch (error) {
        yield put(GetProjectFailed(error))
    }
}
function* handleDelProject(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteProject,payload)
        yield put(DelProjectSuccess(payload))
    } catch (error) {
        yield put(DelProjectFailed(error))
    }
}

function* handleAddProject(action){
    const {payload} = action
    try {
        const result = yield call(Api.addProject,payload)
        yield put(AddProjectSuccess(result.data))
    } catch (error) {
        yield put(AddProjectFailed(error))
    }
}

function* handleUpdateProject(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateProject,payload)
        yield put(UpdateProjectSuccess(result.data))
    } catch (error) {
        yield put(UpdateProjectFailed(error))
    }
}

export {
    handleGetProject,
    handleAddProject,
    handleUpdateProject,
    handleDelProject
}