import {takeEvery, all} from 'redux-saga/effects'
import { handleAddRegion, handleDelRegion, handleGetRegion, handleUpdateRegion } from './RegionMiddle'
import { handleAddEmployee, handleDelEmployee,handleGetEmployee, handleUpdateEmployee } from './EmployeeMiddle'
import { handleAddCountry, handleDelCountry,handleGetCountry, handleUpdateCountry } from './CountryMiddle'
import { handleAddDepartment, handleDelDepartment, handleGetDepartment, handleUpdateDepartment } from './DepartmentMiddle'
import { handleAddDependent, handleDelDependent,handleGetDependent, handleUpdateDependent } from './DependentMiddle'
import { handleAddJob, handleDelJob,handleGetJob, handleUpdateJob } from './JobMiddle'
import { handleAddLocation, handleDelLocation,handleGetLocation, handleUpdateLocation } from './LocationMiddle'
import { handleAddAssignment, handleDelAssignment,handleGetAssignment, handleUpdateAssignment } from './ProjectAssignmentMiddle'
import { handleAddProject, handleDelProject,handleGetProject, handleUpdateProject } from './ProjectMiddle'
import * as ActionTypeRegion from '../Constant/RegionConstant'
import * as ActionTypeEmployee from '../Constant/EmployeeConstant'
import * as ActionTypeCountry from '../Constant/CountryConstant'
import * as ActionTypeDepartment from '../Constant/DepartmentConstant'
import * as ActionTypeDependent from '../Constant/DependentConstant'
import * as ActionTypeJob from '../Constant/JobConstant'
import * as ActionTypeLocation from '../Constant/LocationConstant'
import * as ActionTypeAssignment from '../Constant/ProjectAssignmentConstant'
import * as ActionTypeProject from '../Constant/ProjectConstant'

function * watchAll(){
    yield all([
        takeEvery(ActionTypeRegion.GET_REGION_REQUEST,handleGetRegion),
        takeEvery(ActionTypeRegion.DEL_REGION_REQUEST,handleDelRegion),
        takeEvery(ActionTypeRegion.ADD_REGION_REQUEST,handleAddRegion),
        takeEvery(ActionTypeRegion.UPDATE_REGION_REQUEST,handleUpdateRegion),
        takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST,handleGetEmployee),
        takeEvery(ActionTypeEmployee.DEL_EMPLOYEE_REQUEST,handleDelEmployee),
        takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST,handleAddEmployee),
        takeEvery(ActionTypeEmployee.UPDATE_EMPLOYEE_REQUEST,handleUpdateEmployee),
        takeEvery(ActionTypeCountry.GET_COUNTRY_REQUEST,handleGetCountry),
        takeEvery(ActionTypeCountry.DEL_COUNTRY_REQUEST,handleDelCountry),
        takeEvery(ActionTypeCountry.ADD_COUNTRY_REQUEST,handleAddCountry),
        takeEvery(ActionTypeCountry.UPDATE_COUNTRY_REQUEST,handleUpdateCountry),
        takeEvery(ActionTypeDepartment.GET_DEPARTMENT_REQUEST,handleGetDepartment),
        takeEvery(ActionTypeDepartment.DEL_DEPARTMENT_REQUEST,handleDelDepartment),
        takeEvery(ActionTypeDepartment.ADD_DEPARTMENT_REQUEST,handleAddDepartment),
        takeEvery(ActionTypeDepartment.UPDATE_DEPARTMENT_REQUEST,handleUpdateDepartment),
        takeEvery(ActionTypeDependent.GET_DEPENDENT_REQUEST,handleGetDependent),
        takeEvery(ActionTypeDependent.DEL_DEPENDENT_REQUEST,handleDelDependent),
        takeEvery(ActionTypeDependent.ADD_DEPENDENT_REQUEST,handleAddDependent),
        takeEvery(ActionTypeDependent.UPDATE_DEPENDENT_REQUEST,handleUpdateDependent),
        takeEvery(ActionTypeJob.GET_JOB_REQUEST,handleGetJob),
        takeEvery(ActionTypeJob.DEL_JOB_REQUEST,handleDelJob),
        takeEvery(ActionTypeJob.ADD_JOB_REQUEST,handleAddJob),
        takeEvery(ActionTypeJob.UPDATE_JOB_REQUEST,handleUpdateJob),
        takeEvery(ActionTypeLocation.GET_LOCATION_REQUEST,handleGetLocation),
        takeEvery(ActionTypeLocation.DEL_LOCATION_REQUEST,handleDelLocation),
        takeEvery(ActionTypeLocation.ADD_LOCATION_REQUEST,handleAddLocation),
        takeEvery(ActionTypeLocation.UPDATE_LOCATION_REQUEST,handleUpdateLocation),
        takeEvery(ActionTypeProject.GET_PROJECT_REQUEST,handleGetProject),
        takeEvery(ActionTypeProject.DEL_PROJECT_REQUEST,handleDelProject),
        takeEvery(ActionTypeProject.ADD_PROJECT_REQUEST,handleAddProject),
        takeEvery(ActionTypeProject.UPDATE_PROJECT_REQUEST,handleUpdateProject),
        takeEvery(ActionTypeAssignment.GET_ASSIGNMENT_REQUEST,handleGetAssignment),
        takeEvery(ActionTypeAssignment.DEL_ASSIGNMENT_REQUEST,handleDelAssignment),
        takeEvery(ActionTypeAssignment.ADD_ASSIGNMENT_REQUEST,handleAddAssignment),
        takeEvery(ActionTypeAssignment.UPDATE_ASSIGNMENT_REQUEST,handleUpdateAssignment)
    ])
}

export default watchAll