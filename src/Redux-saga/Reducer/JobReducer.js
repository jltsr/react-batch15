import * as ActionType from '../Constant/JobConstant'

const INIT_STATE = {
    jobs: []
}

const JobReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_JOB_REQUEST:
            return { ...state }
        case ActionType.GET_JOB_SUCCESS:
            return GetJobSucceed(state, action)
        case ActionType.DEL_JOB_REQUEST:
            return { ...state }
        case ActionType.DEL_JOB_SUCCESS:
            return DelJobSucceed(state, action)
        case ActionType.ADD_JOB_REQUEST:
            return { ...state }
        case ActionType.ADD_JOB_SUCCESS:
            return AddJobSucceed(state, action)
        case ActionType.UPDATE_JOB_REQUEST:
            return { ...state }
        case ActionType.UPDATE_JOB_SUCCESS:
            return UpdateJobSucceed(state, action)
        default:
            return GetJobSucceed(state, action)
    }
}

const GetJobSucceed = (state, action) => {
    return {
        ...state,
        jobs: action.payload
    }
}
const DelJobSucceed = (state, action) => {
    const { payload } = action
    const filterJob = state.jobs.filter(j => j.job_id !== payload)
    return {
        ...state,
        jobs: [...filterJob]
    }
}
const AddJobSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        jobs: [...state.jobs,payload]
    }
}
const UpdateJobSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        jobs: [...state.jobs,payload]
    }
}
export default JobReduce