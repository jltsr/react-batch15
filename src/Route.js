import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from './MainLayout/MainLayout'
import CountryView from "./ViewApi/CountryView";
import DepartmentView from "./ViewApi/DepartmentView";
import DependentView from "./ViewApi/DependentView";
import JobView from "./ViewApi/JobView";
import LocationView from "./ViewApi/LocationView";
import RegionView from './ViewApi/RegionView'

export default function Route(){
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: 'region', element: <RegionView /> },
            ]
        },
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: 'country', element: <CountryView /> },
            ]
        },
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: 'location', element: <LocationView /> },
            ]
        },
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: 'department', element: <DepartmentView /> },
            ]
        },
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: 'dependent', element: <DependentView /> },
            ]
        },
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: 'job', element: <JobView /> },
            ]
        },
        {
            path: '*', element: <Navigate to='/404' replace />
        }
    ])
}