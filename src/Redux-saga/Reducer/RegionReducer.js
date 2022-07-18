import * as ActionType from '../Constant/RegionConstant'

const INIT_STATE = {
    region: []
}

const RegionReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_REGION_REQUEST:
            return { ...state }
        case ActionType.GET_REGION_SUCCESS:
            return GetRegionSucceed(state, action)
        case ActionType.DEL_REGION_REQUEST:
            return { ...state }
        case ActionType.DEL_REGION_SUCCESS:
            return DelRegionSucceed(state, action)
        case ActionType.ADD_REGION_REQUEST:
            return { ...state }
        case ActionType.ADD_REGION_SUCCESS:
            return AddRegionSucceed(state, action)
        case ActionType.UPDATE_REGION_REQUEST:
            return { ...state }
        case ActionType.UPDATE_REGION_SUCCESS:
            return UpdateRegionSucceed(state, action)
        default:
            return GetRegionSucceed(state, action)
    }
}

const GetRegionSucceed = (state, action) => {
    return {
        ...state,
        region: action.payload
    }
}
const DelRegionSucceed = (state, action) => {
    const { payload } = action
    const filterRegion = state.region.filter(el => el.region_id !== payload)
    return {
        ...state,
        region: [...filterRegion]
    }
}
const AddRegionSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        region : [...state.region,payload]
    }
}
const UpdateRegionSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        region : [...state.region,payload]
    }
}
export default RegionReduce