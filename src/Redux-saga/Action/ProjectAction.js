import * as ActionType from '../Constant/ProjectConstant'

export const GetProjectRequest = () => ({
    type : ActionType.GET_PROJECT_REQUEST
})

export const GetProjectSuccess = (payload) => ({
    type : ActionType.GET_PROJECT_SUCCESS,
    payload
})

export const GetProjectFailed = (payload) => ({
    type : ActionType.GET_PROJECT_FAILED,
    payload
})

export const DelProjectRequest = (payload) => ({
    type:ActionType.DEL_PROJECT_REQUEST,
    payload
})

export const DelProjectSuccess = (payload) => ({
    type:ActionType.DEL_PROJECT_SUCCESS,
    payload
})

export const DelProjectFailed = (payload) =>({
    type : ActionType.DEL_PROJECT_FAILED,
    payload
})

export const AddProjectRequest = (payload) => ({
    type:ActionType.ADD_PROJECT_REQUEST,
    payload
})

export const AddProjectSuccess = (payload) => ({
    type:ActionType.ADD_PROJECT_SUCCESS,
    payload
})

export const AddProjectFailed = (payload) =>({
    type : ActionType.ADD_PROJECT_FAILED,
    payload
})

export const UpdateProjectRequest = (payload) => ({
    type:ActionType.UPDATE_PROJECT_REQUEST,
    payload
})

export const UpdateProjectSuccess = (payload) => ({
    type:ActionType.UPDATE_PROJECT_SUCCESS,
    payload
})

export const UpdateProjectFailed = (payload) =>({
    type : ActionType.UPDATE_PROJECT_FAILED,
    payload
})