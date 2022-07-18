import { combineReducers } from "redux";

import RegionsReduce from "./RegionReducer";
import EmployeeReduce from "./EmployeeReducer";
import JobReduce from "./JobReducer";

const rootReducer = combineReducers({
    regionStated : RegionsReduce,
    employeeStated : EmployeeReduce,
    jobStated : JobReduce
})

export default rootReducer