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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                         
                         <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Location </button>
                
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                    <th scope="col" className="px-6 py-3">Location ID</th>
                                    <th scope="col" className="px-6 py-3">Street Adress</th>
                                    <th scope="col" className="px-6 py-3">Postal Code</th>
                                    <th scope="col" className="px-6 py-3">City</th>
                                    <th scope="col" className="px-6 py-3">State Province</th>
                                    <th scope="col" className="px-6 py-3">Country ID</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>    
                                <tbody className="overscroll-auto md:overscroll-contain">
                                    {
                                        location&&location.map( loc => (
                                            <tr key={loc.location_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{loc.location_id}</td>
                                                <td className="px-6 py-2">{loc.street_address}</td>
                                                <td className="px-6 py-2">{loc.postal_code}</td>
                                                <td className="px-6 py-2">{loc.city}</td>
                                                <td className="px-6 py-2">{loc.state_province}</td>
                                                <td className="px-6 py-2">{loc.country_id}</td>
                                                <button ype="button"
                                                        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => onDelete(loc.location_id)}> Delete</button>
                                                <button onClick={() => onClick({ locID: loc.location_id })}
                                                type="button"
                                                class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"> Edit </button>
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
