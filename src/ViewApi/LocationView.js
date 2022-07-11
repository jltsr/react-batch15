import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import LocationForm from '../FormApi/LocationForm'
import LocationEditForm from '../FormApi/LocationEditForm'

export default function LocationView() {
    const [location,setLocation] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
    const [country_id,setcountry_id] = useState([])
    const [values, setValues] = useState({
        location_id: '',
        street_address: '',
        postal_code:'',
        city : '',
        state_province : '',
        country_id : ''

    })

    useEffect(() => {
        Api.listLocation().then(data => {
            setLocation(data)
        })
        Api.listCountry().then(data=>{
            setcountry_id(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const onEdit = async () => {
        const payload = {
            location_id : (id.locID),
            street_address : values.street_address,
            postal_code : values.postal_code,
            city : values.city,
            state_province : values.state_province,
            country_id: values.country_id
        }

        await Api.updateLocation(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully update')
            })

    }

    const onSubmit = async() => {
        const payload= {
            location_id : values.location_id,
            street_address : values.street_address,
            postal_code : values.postal_code,
            city : values.city,
            state_province : values.state_province,
            country_id: values.country_id
            
        }
       
        await Api.addLocation(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
        
       
    }

    const onDelete = async(id) =>{
        Api.deleteLocation(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (locID) => {
        setDisplayEdit(true)
        setId(locID)
    }

    return (
        <div>
        <div style={{ margin: "5px", padding: "10px"}}>
                {

                    displayEdit ?
                    <LocationEditForm
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        country_id={country_id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display?
                    <LocationForm
                        onSubmit={onSubmit}
                        handleOnChange={handleOnChange}
                        setDisplay={setDisplay}
                        country_id={country_id}
                    />
                    :
                        <>
                         <h2>List location</h2>
                         <button onClick={() => setDisplay(true)}> Add Location </button>
                
                            <table rules='all' border='1'>
                                <th align='center'>Location ID</th>
                                <th align='center'>Street Adress</th>
                                <th align='center'>Postal Code</th>
                                <th align='center'>City</th>
                                <th align='center'>State Province</th>
                                <th align='center'>Country ID</th>
                                <th align='center'>Action</th>
                                
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
                                                <button onClick={() => onDelete(loc.location_id)}> Delete</button>
                                                <button onClick={() => onClick({ locID: loc.location_id })}> Edit </button>
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
