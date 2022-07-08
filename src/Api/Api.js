import axios from "axios"
import config from "../Config/Config"

//region
const listRegion = async() => {
    try {
        const resultRegion = await axios.get(`${config.domain}/region/`)
        return resultRegion.data
    } catch (error) {
        return await error.message
    }
}

//country
const listCountry = async() => {
    try {
        const resultCountry = await axios.get(`${config.domain}/country/`)
        return resultCountry.data
    } catch (error) {
        return await error.message
    }
}

//Location
const listLocation= async() => {
    try {
        const resultLocation = await axios.get(`${config.domain}/location/`)
        return resultLocation.data
    } catch (error) {
        return await error.message
    }
}

//department
const listDepartment = async() => {
    try {
        const resultDepartment = await axios.get(`${config.domain}/department/`)
        return resultDepartment.data
    } catch (error) {
        return await error.message
    }
}

//job
const listJob = async() => {
    try {
        const resultJob = await axios.get(`${config.domain}/job/`)
        return resultJob.data
    } catch (error) {
        return await error.message
    }
}

//dependent
const listDependent = async() => {
    try {
        const resultDependent = await axios.get(`${config.domain}/dependent/`)
        return resultDependent.data
    } catch (error) {
        return await error.message
    }
}

//Employee
const listEmployee = async() => {
    try {
        const resultEmployee = await axios.get(`${config.domain}/employee/`)
        return resultEmployee.data
    } catch (error) {
        return await error.message
    }
}

//project
const listProject = async() => {
    try {
        const resultPoject = await axios.get(`${config.domain}/project/`)
        return resultPoject.data
    } catch (error) {
        return await error.message
    }
}

//project assignment
const listPojectAssignment = async() => {
    try {
        const resultProjectAssignment = await axios.get(`${config.domain}/project_assignment/`)
        return resultProjectAssignment.data
    } catch (error) {
        return await error.message
    }
}
export default {
    listRegion,
    listCountry,
    listLocation,
    listDepartment,
    listJob,
    listDependent,
    listEmployee,
    listProject,
    listPojectAssignment
}