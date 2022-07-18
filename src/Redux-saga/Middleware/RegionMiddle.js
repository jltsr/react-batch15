import {call,put} from 'redux-saga/effects'
import Api from '../../Api/Api'
import { GetRegionSuccess, GetRegionFailed, DelRegionSuccess,DelRegionFailed, AddRegionSuccess, AddRegionFailed, UpdateRegionSuccess, UpdateRegionFailed } from '../Action/RegionAction'

function* handleGetRegion(){
    try {
        const result = yield call(Api.listRegion)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFailed(error))
    }
}
function* handleDelRegion(action){
    const{payload} = action
    try {
        const result = yield call(Api.deleteRegion,payload)
        yield put(DelRegionSuccess(payload))
    } catch (error) {
        yield put(DelRegionFailed(error))
    }
}

function* handleAddRegion(action){
    const {payload} = action
    try {
        const result = yield call(Api.addRegion,payload)
        yield put(AddRegionSuccess(result.data))
    } catch (error) {
        yield put(AddRegionFailed(error))
    }
}

function* handleUpdateRegion(action){
    const {payload} = action
    try {
        const result = yield call(Api.updateRegion,payload)
        yield put(UpdateRegionSuccess(result.data))
    } catch (error) {
        yield put(UpdateRegionFailed(error))
    }
}

export {
    handleGetRegion,
    handleAddRegion,
    handleUpdateRegion,
    handleDelRegion
}