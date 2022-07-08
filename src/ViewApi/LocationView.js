import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function RegionView() {
    const [location,setLocation] = useState([])

    useEffect(() => {
        Api.listLocation().then(data => {
            setLocation(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List location</h2>
                
                {
                        <>
                            <table>
                                <th>Location ID</th>
                                <th>Street Adress</th>
                                <th>Postal Code</th>
                                <th>City</th>
                                <th>State Province</th>
                                <th>Country ID</th>
                                
                                <tbody>
                                    {
                                        location&&location.map( loc => (
                                            <tr key={loc.location_id}>
                                                <td>{loc.location_id}</td>
                                                <td>{loc.street_address}</td>
                                                <td>{loc.postal_code}</td>
                                                <td>{loc.city}</td>
                                                <td>{loc.state_province}</td>
                                                <td>{loc.country_id}</td>
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
