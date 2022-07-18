import * as ActionType from '../Constant/DepartmentConstant'

export const GetDepartmentRequest = () => ({
    type : ActionType.GET_DEPARTMENT_REQUEST
})

export const GetDepartmentSuccess = (payload) => ({
    type : ActionType.GET_DEPARTMENT_SUCCESS,
    payload
})

export const GetDepartmentFailed = (payload) => ({
    type : ActionType.GET_DEPARTMENT_FAILED,
    payload
})

export const DelDepartmentRequest = (payload) => ({
    type:ActionType.DEL_DEPARTMENT_REQUEST,
    payload
})

export const DelDepartmentSuccess = (payload) => ({
    type:ActionType.DEL_DEPARTMENT_SUCCESS,
    payload
})

export const DelDepartmentFailed = (payload) =>({
    type : ActionType.DEL_DEPARTMENT_FAILED,
    payload
})

export const AddDepartmentRequest = (payload) => ({
    type:ActionType.ADD_DEPARTMENT_REQUEST,
    payload
})

export const AddDepartmentSuccess = (payload) => ({
    type:ActionType.ADD_DEPARTMENT_SUCCESS,
    payload
})

export const AddDepartmentFailed = (payload) =>({
    type : ActionType.ADD_DEPARTMENT_FAILED,
    payload
})

export const UpdateDepartmentRequest = (payload) => ({
    type:ActionType.UPDATE_DEPARTMENT_REQUEST,
    payload
})

export const UpdateDepartmentSuccess = (payload) => ({
    type:ActionType.UPDATE_DEPARTMENT_SUCCESS,
    payload
})

export const UpdateDepartmentFailed = (payload) =>({
    type : ActionType.UPDATE_DEPARTMENT_FAILED,
    payload
})