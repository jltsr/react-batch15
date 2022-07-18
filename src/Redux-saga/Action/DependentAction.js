import * as ActionType from '../Constant/DependentConstant'

export const GetDependentRequest = () => ({
    type : ActionType.GET_DEPENDENT_REQUEST
})

export const GetDependentSuccess = (payload) => ({
    type : ActionType.GET_DEPENDENT_SUCCESS,
    payload
})

export const GetDependentFailed = (payload) => ({
    type : ActionType.GET_DEPENDENT_FAILED,
    payload
})

export const DelDependentRequest = (payload) => ({
    type:ActionType.DEL_DEPENDENT_REQUEST,
    payload
})

export const DelDependentSuccess = (payload) => ({
    type:ActionType.DEL_DEPENDENT_SUCCESS,
    payload
})

export const DelDependentFailed = (payload) =>({
    type : ActionType.DEL_DEPENDENT_FAILED,
    payload
})

export const AddDependentRequest = (payload) => ({
    type:ActionType.ADD_DEPENDENT_REQUEST,
    payload
})

export const AddDependentSuccess = (payload) => ({
    type:ActionType.ADD_DEPENDENT_SUCCESS,
    payload
})

export const AddDependentFailed = (payload) =>({
    type : ActionType.ADD_DEPENDENT_FAILED,
    payload
})

export const UpdateDependentRequest = (payload) => ({
    type:ActionType.UPDATE_DEPENDENT_REQUEST,
    payload
})

export const UpdateDependentSuccess = (payload) => ({
    type:ActionType.UPDATE_DEPENDENT_SUCCESS,
    payload
})

export const UpdateDependentFailed = (payload) =>({
    type : ActionType.UPDATE_DEPENDENT_FAILED,
    payload
})