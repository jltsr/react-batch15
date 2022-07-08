import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function RegionView() {
    const [dependent,setDependent] = useState([])

    useEffect(() => {
        Api.listDependent().then(data => {
            setDependent(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List Dependent</h2>
                
                {
                        <>
                            <table>
                                <th>Dependent ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Relationship</th>
                                <th>Employee ID</th>
                                <tbody>
                                    {
                                        dependent&&dependent.map( depen => (
                                            <tr key={depen.dependent_id}>
                                                <td>{depen.dependent_id}</td>
                                                <td>{depen.first_name}</td>
                                                <td>{depen.last_name}</td>
                                                <td>{depen.relationship}</td>
                                                <td>{depen.employee_id}</td>
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
