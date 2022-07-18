import * as ActionType from '../Constant/CountryConstant'

export const GetCountryRequest = () => ({
    type : ActionType.GET_COUNTRY_REQUEST
})

export const GetCountrySuccess = (payload) => ({
    type : ActionType.GET_COUNTRY_SUCCESS,
    payload
})

export const GetCountryFailed = (payload) => ({
    type : ActionType.GET_COUNTRY_FAILED,
    payload
})

export const DelCountryRequest = (payload) => ({
    type:ActionType.DEL_COUNTRY_REQUEST,
    payload
})

export const DelCountrySuccess = (payload) => ({
    type:ActionType.DEL_COUNTRY_SUCCESS,
    payload
})

export const DelCountryFailed = (payload) =>({
    type : ActionType.DEL_COUNTRY_FAILED,
    payload
})

export const AddCountryRequest = (payload) => ({
    type:ActionType.ADD_COUNTRY_REQUEST,
    payload
})

export const AddCountrySuccess = (payload) => ({
    type:ActionType.ADD_COUNTRY_SUCCESS,
    payload
})

export const AddCountryFailed = (payload) =>({
    type : ActionType.ADD_COUNTRY_FAILED,
    payload
})

export const UpdateCountryRequest = (payload) => ({
    type:ActionType.UPDATE_COUNTRY_REQUEST,
    payload
})

export const UpdateCountrySuccess = (payload) => ({
    type:ActionType.UPDATE_COUNTRY_SUCCESS,
    payload
})

export const UpdateCountryFailed = (payload) =>({
    type : ActionType.UPDATE_COUNTRY_FAILED,
    payload
})
