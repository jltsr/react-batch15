import * as ActionType from '../Constant/JobConstant'

export const GetJobRequest = () => ({
    type : ActionType.GET_JOB_REQUEST
})

export const GetJobSuccess = (payload) => ({
    type : ActionType.GET_JOB_SUCCESS,
    payload
})

export const GetJobFailed = (payload) => ({
    type : ActionType.GET_JOB_FAILED,
    payload
})

export const DelJobRequest = (payload) => ({
    type:ActionType.DEL_JOB_REQUEST,
    payload
})

export const DelJobSuccess = (payload) => ({
    type:ActionType.DEL_JOB_SUCCESS,
    payload
})

export const DelJobFailed = (payload) =>({
    type : ActionType.DEL_JOB_FAILED,
    payload
})

export const AddJobRequest = (payload) => ({
    type:ActionType.ADD_JOB_REQUEST,
    payload
})

export const AddJobSuccess = (payload) => ({
    type:ActionType.ADD_JOB_SUCCESS,
    payload
})

export const AddJobFailed = (payload) =>({
    type : ActionType.ADD_JOB_FAILED,
    payload
})

export const UpdateJobRequest = (payload) => ({
    type:ActionType.UPDATE_JOB_REQUEST,
    payload
})

export const UpdateJobSuccess = (payload) => ({
    type:ActionType.UPDATE_JOB_SUCCESS,
    payload
})

export const UpdateJobFailed = (payload) =>({
    type : ActionType.UPDATE_JOB_FAILED,
    payload
})