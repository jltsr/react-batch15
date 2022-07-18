import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import CountryForm from '../FormApi/CountryForm'
import CountryEditForm from '../FormApi/CountryEditForm'

export default function CountryView() {
    const [country,setCountry] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
    const [region_id,setRegion_id] = useState([])
    const [values, setValues] = useState({
        country_id: '',
        country_name: '',
        region_id:'',
    })
    useEffect(() => {
        Api.listCountry().then(data => {
            setCountry(data)
        })
        Api.listRegion().then(data=>{
            setRegion_id(data)
        })
        
        setRefresh(false)
    },[refresh])

    
    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }
    const onEdit = async () => {
        const payload = {
            country_id: (id.countID),
            country_name: values.country_name,
            region_id: values.region_id
        }

        await Api.updateCountry(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully update')
            })

    }

    const onSubmit = async() => {
        const payload= {
            country_id: values.country_id,
            country_name: values.country_name,
            region_id: values.region_id
        }
       
        await Api.addCountry(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
        
       
    }
   
    const onDelete = async(id) =>{
        Api.deleteCountry(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    const onClick = (countID) => {
        setDisplayEdit(true)
        setId(countID)
    }

    return (
        <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                
                {
                    displayEdit ?
                    <CountryEditForm
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        region_id={region_id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display?
                    <CountryForm
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                            region_id={region_id}
                            
                            />
                    :
                        <>
                        
                        <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Country </button>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                    <th scope="col" className="px-6 py-3">Country ID</th>
                                    <th scope="col" className="px-6 py-3">Country Name</th>
                                    <th scope="col" className="px-6 py-3">Region ID</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="overscroll-auto md:overscroll-contain">
                                    {
                                        country&&country.map( count => (
                                            <tr key={count.country_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{count.country_id}</td>
                                                <td className="px-6 py-2">{count.country_name}</td>
                                                <td className="px-6 py-2">{count.region_id}</td>
                                                <button type="button"
                                                    class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" 
                                                    onClick={() => onDelete(count.country_id)}> Delete </button>
                                                <button type="button"
                                                    class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                                    onClick={() => onClick({ countID: count.country_id })}> Edit </button>
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
