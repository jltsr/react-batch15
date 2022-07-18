import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import DependentForm from '../FormApi/DependentForm'
import DependentEditForm from '../FormApi/DependentEditForm'

export default function DependentView() {
    const [dependent,setDependent] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
    const [employee_id,setEmployee_id] = useState([])
    const [values, setValues] = useState({
        dependent_id: '',
        first_name: '',
        last_name:'',
        relationship:'',
        employee_id:'',
    })

    useEffect(() => {
        Api.listDependent().then(data => {
            setDependent(data)
        })
        Api.listEmployee().then(data=>{
            setEmployee_id(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }
    const onEdit = async() => {
        const payload= {
            dependent_id: (id.depenID),
            first_name: values.first_name,
            last_name: values.last_name,
            relationship:values.relationship,
            employee_id: values.employee_id
        }
       
        await Api.updateDependent(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully update')
            })
    }

    const onSubmit = async() => {
        const payload= {
            dependent_id: values.dependent_id,
            first_name: values.first_name,
            last_name: values.last_name,
            relationship:values.relationship,
            employee_id: values.employee_id
        }
       
        await Api.addDependent(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    const onDelete = async(id) =>{
        Api.deleteDependent(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    const onClick = (depenID) => {
        setDisplayEdit(true)
        setId(depenID)
    }

    return (
        <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg" >
                
                {
                    displayEdit ?
                    <DependentEditForm
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        employee_id={employee_id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display?
                    <DependentForm
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                            employee_id={employee_id}
                            
                            />
                    :
                        <>
                            <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Dependent </button>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <th scope="col" className="px-6 py-3">Dependent ID</th>
                                    <th scope="col" className="px-6 py-3">First Name</th>
                                    <th scope="col" className="px-6 py-3">Last Name</th>
                                    <th scope="col" className="px-6 py-3">Relationship</th>
                                    <th scope="col" className="px-6 py-3">Employee ID</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </thead>
                                <tbody>
                                    {
                                        dependent&&dependent.map( depen => (
                                            <tr key={depen.dependent_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{depen.dependent_id}</td>
                                                <td className="px-6 py-2">{depen.first_name}</td>
                                                <td className="px-6 py-2">{depen.last_name}</td>
                                                <td className="px-6 py-2">{depen.relationship}</td>
                                                <td className="px-6 py-2">{depen.employee_id}</td>
                                                <button type="button"
                                                        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => onDelete(depen.dependent_id)}> Delete</button>
                                                <button type="button"
                                                        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={() => onClick({ depenID: depen.dependent_id })}> Edit </button>
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
