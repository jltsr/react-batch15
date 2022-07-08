import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function RegionView() {
    const [job,setJob] = useState([])

    useEffect(() => {
        Api.listJob().then(data => {
            setJob(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List Job</h2>
                
                {
                        <>
                            <table>
                                <th>Job ID</th>
                                <th>Min Salary</th>
                                <th>Max Salary</th>
                                <th>Job Title</th>
                                <tbody>
                                    {
                                        job&&job.map( j => (
                                            <tr key={j.job_id}>
                                                <td>{j.job_id}</td>
                                                <td>{j.min_salary}</td>
                                                <td>{j.max_salary}</td>
                                                <td>{j.job_title}</td>
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
