import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function ProjectAssignmentView() {
    const [assignment,setAssignment] = useState([])

    useEffect(() => {
        Api.listPojectAssignment().then(data => {
            setAssignment(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List Assignment</h2>
                
                {
                        <>
                            <table>
                            <th>Pras Proj Id</th>
                            <th>Pras Employee Id</th>
                            <th>Pras Start Date</th>
                            <th>Pras End Date</th>
                            <th>Pras Status</th>
                                <tbody>
                                    {
                                        assignment&&assignment.map( ass => (
                                            <tr key={ass.pras_proj_id}>
                                                <td>{ass.pras_proj_id}</td>
                                                <td>{ass.pras_employee_id}</td>
                                                <td>{ass.pras_startdate}</td>
                                                <td>{ass.pras_enddate}</td>
                                                <td>{ass.pras_status}</td>
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
