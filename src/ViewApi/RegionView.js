import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import RegionForm from '../FormApi/RegionForm'
import RegionEditForm from '../FormApi/RegionEditForm'

export default function RegionView() {
    const [region,setRegion] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
    const [values, setValues] = useState({
        region_id: undefined,
        region_name: '',
    })

    useEffect(() => {
        Api.listRegion().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const onEdit = async () => {
        const payload = {
            region_id: (id.regID),
            region_name: (values.region_name)
        }

        await Api.updateRegion(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully update')
            })

    }
    

    const onSubmit = async() => {
        const payload= {
            region_name : values.region_name
        }

        await Api.addRegion(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    const onDelete = async(id) =>{
        Api.deleteRegion(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (regID) => {
        setDisplayEdit(true)
        setId(regID)
    }

    return (
    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {
                
                displayEdit ?
                <RegionEditForm
                    onSubmit={onEdit}
                    handleOnChange={handleOnChange}
                    id={id}
                    setDisplay={setDisplayEdit}
                />
                :

                        display ?
                            <RegionForm
                                onSubmit={onSubmit}
                                handleOnChange={handleOnChange}
                                setDisplay={setDisplay}
                            />
                        :
                            <>
                                
                                <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Region </button>
                                <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                        <th scope="col" className="px-6 py-3">Region ID</th>
                                        <th scope="col" className="px-6 py-3">Region Name</th>
                                        <th scope="col" className="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="overscroll-auto md:overscroll-contain">
                                        {
                                            region&&region.map( reg => {
                                                return(
                                                <tr key={reg.region_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{reg.region_id}</td>
                                                    <td className="px-6 py-2">{reg.region_name}</td>
                                                    <button type="button"
                                                        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => onDelete(reg.region_id)}>
                                                        Delete</button>
                                                    <button onClick={() => onClick({ regID: reg.region_id })}
                                                        type="button"
                                                        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
                                                        Edit</button>
                                                </tr>
                                                 
                                                
                                            )
                                         })
                                        }
                                    </tbody>
                                    
                                </table>
                            </>
                    
                
            }
        </div>
    </div>
    )
}
