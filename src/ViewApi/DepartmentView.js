import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import DepartmentForm from '../FormApi/DepartmentForm'
import DepartmentEditForm from '../FormApi/DepartmentEditForm'

export default function DepartmentView() {
    const [department,setDepartment] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
    const [location_id,setlocation_id] = useState([])
    const [values, setValues] = useState({
        department_id:'',
        department_name:'',
        location_id: '' 
    })

    useEffect(() => {
        Api.listDepartment().then(data => {
            setDepartment(data)
        })
        Api.listLocation().then(data => {
            setlocation_id(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const onEdit = async() => {
        const payload= {
            department_id: (id.departID),
            department_name : values.department_name,
            location_id : values.location_id
            
        }
       
        await Api.updateDepartment(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    const onSubmit = async() => {
        const payload= {
            department_id: values.department_id,
            department_name : values.department_name,
            location_id : values.location_id
            
        }
       
        await Api.addDepartment(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    const onDelete = async(id) =>{
        Api.deleteDepartment(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (departID) => {
        setDisplayEdit(true)
        setId(departID)
    }

    return (
        <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {
                    displayEdit ?
                    <DepartmentEditForm
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        location_id={location_id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display?
                    <DepartmentForm
                        onSubmit={onSubmit}
                        handleOnChange={handleOnChange}
                        setDisplay={setDisplay}
                        location_id={location_id}
                    />
                    :
                        <>
                            
                            <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Department </button>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                    <th scope="col" className="px-6 py-3">Department ID</th>
                                    <th scope="col" className="px-6 py-3">Department Name</th>
                                    <th scope="col" className="px-6 py-3">Location ID</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="overscroll-auto md:overscroll-contain">
                                    {
                                        department&&department.map( dept => (
                                            <tr key={dept.department_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{dept.department_id}</td>
                                                <td className="px-6 py-2">{dept.department_name}</td>
                                                <td className="px-6 py-2">{dept.location_id}</td>
                                                <button type="button"
                                                        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => onDelete(dept.department_id)}> Delete </button>
                                                <button type="button"
                                                        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={() => onClick({ departID: dept.department_id })}> Edit </button>
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
