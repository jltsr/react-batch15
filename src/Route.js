import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from './MainLayout/Dashboard'
import CountryView from "./ViewApi/CountryView";
import DepartmentView from "./ViewApi/DepartmentView";
import DependentView from "./ViewApi/DependentView";
import EmployeeView from "./ViewSaga/Employee";
import JobView from "./ViewApi/JobView";
import LocationView from "./ViewApi/LocationView";
import RegionView from './ViewApi/RegionView';
import ProjectAssignmentView from './ViewApi/ProjectAssignmentView'
import ProjectView from './ViewApi/ProjectView'

export default function Route(){
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: 'region', element: <RegionView /> },
                { path: 'country', element: <CountryView /> },
                { path: 'location', element: <LocationView /> },
                { path: 'department', element: <DepartmentView /> },
                { path: 'dependent', element: <DependentView /> },
                { path: 'job', element: <JobView /> },
                { path: 'employee', element: <EmployeeView /> },
                { path: 'project_assignment', element: <ProjectAssignmentView /> },
                { path: 'project', element: <ProjectView /> }
            ]
        },
        {
            path: '*', element: <Navigate to='/404' replace />
        }
    ])
}