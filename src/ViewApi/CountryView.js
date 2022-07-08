import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function CountryView() {
    const [country,setCountry] = useState([])

    useEffect(() => {
        Api.listCountry().then(data => {
            setCountry(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List Country</h2>
                
                {
                        <>
                            <table>
                                <th>Country ID</th>
                                <th>Country Name</th>
                                <th>Region ID</th>
                                <tbody>
                                    {
                                        country&&country.map( count => (
                                            <tr key={count.country_id}>
                                                <td>{count.country_id}</td>
                                                <td>{count.country_name}</td>
                                                <td>{count.region_id}</td>
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
