import * as ActionType from '../Constant/ProjectAssignmentConstant'

export const GetAssignmentRequest = () => ({
    type : ActionType.GET_ASSIGNMENT_REQUEST
})

export const GetAssignmentSuccess = (payload) => ({
    type : ActionType.GET_ASSIGNMENT_SUCCESS,
    payload
})

export const GetAssignmentFailed = (payload) => ({
    type : ActionType.GET_ASSIGNMENT_FAILED,
    payload
})

export const DelAssignmentRequest = (payload) => ({
    type:ActionType.DEL_ASSIGNMENT_REQUEST,
    payload
})

export const DelAssignmentSuccess = (payload) => ({
    type:ActionType.DEL_ASSIGNMENT_SUCCESS,
    payload
})

export const DelAssignmentFailed = (payload) =>({
    type : ActionType.DEL_ASSIGNMENT_FAILED,
    payload
})

export const AddAssignmentRequest = (payload) => ({
    type:ActionType.ADD_ASSIGNMENT_REQUEST,
    payload
})

export const AddAssignmentSuccess = (payload) => ({
    type:ActionType.ADD_ASSIGNMENT_SUCCESS,
    payload
})

export const AddAssignmentFailed = (payload) =>({
    type : ActionType.ADD_ASSIGNMENT_FAILED,
    payload
})

export const UpdateAssignmentRequest = (payload) => ({
    type:ActionType.UPDATE_ASSIGNMENT_REQUEST,
    payload
})

export const UpdateAssignmentSuccess = (payload) => ({
    type:ActionType.UPDATE_ASSIGNMENT_SUCCESS,
    payload
})

export const UpdateAssignmentFailed = (payload) =>({
    type : ActionType.UPDATE_ASSIGNMENT_FAILED,
    payload
})