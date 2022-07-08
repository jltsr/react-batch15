import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function RegionView() {
    const [department,setDepartment] = useState([])

    useEffect(() => {
        Api.listDepartment().then(data => {
            setDepartment(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List Department</h2>
                
                {
                        <>
                            <table>
                                <th>Department ID</th>
                                <th>Department Name</th>
                                <th>Location ID</th>
                                <tbody>
                                    {
                                        department&&department.map( dept => (
                                            <tr key={dept.department_id}>
                                                <td>{dept.department_id}</td>
                                                <td>{dept.department_name}</td>
                                                <td>{dept.location_id}</td>
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
