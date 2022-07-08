import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function RegionView() {
    const [employee,setEmployee] = useState([])

    useEffect(() => {
        Api.listEmployee().then(data => {
            setEmployee(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List Employee</h2>
                
                {
                        <>
                            <table>
                            <th>Employee Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Hire Date</th>
                            <th>Job Id</th>
                            <th>Salary</th>
                            <th>Manager Id</th>
                            <th>Department Id</th>
                                <tbody>
                                    {
                                        employee&&employee.map( emp => (
                                            <tr key={emp.employee_id}>
                                            <td>{emp.employee_id}</td>
                                            <td>{emp.first_name}</td>
                                            <td>{emp.last_name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.phone_number}</td>
                                            <td>{emp.hire_date}</td>
                                            <td>{emp.job_id}</td>
                                            <td>{emp.salary}</td>
                                            <td>{emp.manager_id}</td>
                                            <td>{emp.department_id}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                }
            </div>
    </div>
  )
}
