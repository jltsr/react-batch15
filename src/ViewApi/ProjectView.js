import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function ProjectView() {
    const [project,setPoject] = useState([])

    useEffect(() => {
        Api.listProject().then(data => {
            setPoject(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List Project</h2>
                
                {
                        <>
                            <table>
                            <th>Project Id</th>
                            <th>Proj Name</th>
                            <th>Proj Create</th>
                            <th>Proj Date</th>
                            <th>Proj Cust Name</th>
                            <th>Proj Customer</th>
                                <tbody>
                                    {
                                        project&&project.map( proj => (
                                            <tr key={proj.proj_id}>
                                            <td>{proj.proj_id}</td>
                                            <td>{proj.proj_name}</td>
                                            <td>{proj.proj_createdon}</td>
                                            <td>{proj.proj_duedate}</td>
                                            <td>{proj.proj_status}</td>
                                            <td>{proj.proj_customer}</td>
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
