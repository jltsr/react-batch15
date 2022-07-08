import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'

export default function RegionView() {
    const [region,setRegion] = useState([])

    useEffect(() => {
        Api.listRegion().then(data => {
            setRegion(data)
        })
    },[])

    return (
        <div>
        <div>
                <h2>List Region</h2>
                
                {
                        <>
                            <table>
                                <th>Region ID</th>
                                <th>Region Name</th>
                                <tbody>
                                    {
                                        region&&region.map( reg => (
                                            <tr key={reg.region_id}>
                                                <td>{reg.region_id}</td>
                                                <td>{reg.region_name}</td>
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
