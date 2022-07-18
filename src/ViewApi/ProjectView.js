import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import ProjectForm from '../FormApi/ProjectForm'
import ProjectEditForm from '../FormApi/ProjectEditForm'

export default function ProjectView() {
    const [project,setPoject] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
    const [employee,setEmployee] = useState([])
    const [values, setValues] = useState({
        proj_id: '',
        proj_name: '',
        proj_createdon: '',
        proj_duedate: '',
        proj_cust_name: '',
        proj_description: '',
        proj_status: '',
        proj_amount: '',
        proj_account_mgr: '',
        employee_id: ''
    })
    
    const onEdit = async() => {
        const payload= {
            proj_id: (id.projID),
            proj_name: values.proj_name, 
            proj_createdon: values.proj_createdon,
            proj_duedate: values.proj_duedate,
            proj_cust_name: values.proj_cust_name,
            proj_description: values.proj_description,
            proj_status: values.proj_status,
            proj_amount: values.proj_amount,
            proj_account_mgr: values.proj_account_mgr,
            employee_id: values.employee_id
        }
       
        await Api.updateProject(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully update')
            })
    }
    const onSubmit = async() => {
        const payload= {
            proj_id: values.proj_id,
            proj_name: values.proj_name, 
            proj_createdon: values.proj_createdon,
            proj_duedate: values.proj_duedate,
            proj_cust_name: values.proj_cust_name,
            proj_description: values.proj_description,
            proj_status: values.proj_status,
            proj_amount: values.proj_amount,
            proj_account_mgr: values.proj_account_mgr,
            employee_id: values.employee_id
        }
       
        await Api.addProject(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    useEffect(() => {
        Api.listProject().then(data => {
            setPoject(data)
        })
        Api.listEmployee().then(data=>{
            setEmployee(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const onDelete = async(id) =>{
        Api.deleteProject(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    const onClick = (projID) => {
        setDisplayEdit(true)
        setId(projID)
    }

    return (
        <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                
                {
                    displayEdit ?
                    <ProjectEditForm
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        employee={employee}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display?
                    <ProjectForm
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                            employee={employee}
                            
                            />
                    :
                        <>
                            <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Project </button>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <th scope="col" className="px-6 py-3">Project Id</th>
                                    <th scope="col" className="px-6 py-3">Project Name</th>
                                    <th scope="col" className="px-6 py-3">Project Create</th>
                                    <th scope="col" className="px-6 py-3">Project Due Date</th>
                                    <th scope="col" className="px-6 py-3">Project Customer Name</th>
                                    <th scope="col" className="px-6 py-3">Project Desciption</th>
                                    <th scope="col" className="px-6 py-3">Project Status</th>
                                    <th scope="col" className="px-6 py-3">Project Amount</th>
                                    <th scope="col" className="px-6 py-3">Project Account manager</th>
                                    <th scope="col" className="px-6 py-3">Employee ID</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </thead>
                                <tbody>
                                    {
                                        project&&project.map( proj => (
                                            <tr key={proj.proj_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{proj.proj_id}</td>
                                            <td className="px-6 py-2">{proj.proj_name}</td>
                                            <td className="px-6 py-2">{proj.proj_createdon}</td>
                                            <td className="px-6 py-2">{proj.proj_duedate}</td>
                                            <td className="px-6 py-2">{proj.proj_cust_name}</td>
                                            <td className="px-6 py-2">{proj.proj_description}</td>
                                            <td className="px-6 py-2">{proj.proj_status}</td>
                                            <td className="px-6 py-2">{proj.proj_amount}</td>
                                            <td className="px-6 py-2">{proj.proj_account_mgr}</td>
                                            <td className="px-6 py-2">{proj.employee_id}</td>
                                            <button type="button"
                                                        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => onDelete(proj.proj_id)}> Delete</button>
                                                <button type="button"
                                                        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={() => onClick({ projID: proj.proj_id })}> Edit </button>
                                            
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
