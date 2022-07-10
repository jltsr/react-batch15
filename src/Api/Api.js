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
const addRegion = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/region/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteRegion= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/region/${id}`)
        return result
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
const addCountry = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/country/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteCountry= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/country/${id}`)
        return result
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
const addLocation = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/location/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteLocation= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/location/${id}`)
        return result
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
const addDepartment = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/department/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteDepartment= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/department/${id}`)
        return result
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
const addJob = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/job/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteJob= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/job/${id}`)
        return result
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
const addDependent = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/dependent/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteDependent= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/dependent/${id}`)
        return result
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
const addEmployee = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/employee/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteEmployee= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/employee${id}`)
        return result
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
const addProject = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/project/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteProject= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/project/${id}`)
        return result
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
const addProjectAssignment = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/project_assignment/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const deleteProjectAssignment= async(id) => {
    try {
        const result =await axios.delete(`${config.domain}/project_assignment/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}
export default {
    listRegion,addRegion,deleteRegion,
    listCountry,addCountry,deleteCountry,
    listLocation,addLocation,deleteLocation,
    listDepartment,addDepartment,deleteDepartment,
    listJob,addJob,deleteJob,
    listDependent,addDependent,deleteDependent,
    listEmployee,addEmployee,deleteEmployee,
    listProject,addProject,deleteProject,
    listPojectAssignment,addProjectAssignment,deleteProjectAssignment
}