import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import ProjectAssignmentForm from '../FormApi/ProjectAssignmentForm'
import ProjectAssignmentEditForm from '../FormApi/ProjectAssignmentEditForm'

export default function ProjectAssignmentView() {
    const [assignment,setAssignment] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
    const [project,setProject] = useState([])
    const [employee,setEmployee] = useState([])
    const [values, setValues] = useState({
        pras_proj_id: '',
        pras_employee_id: '',
        pras_startdate: '',
        pras_enddate: '',
        pras_status: ''
    })

    useEffect(() => {
        Api.listProjectAssignment().then(data => {
            setAssignment(data)
        })
        Api.listProject().then(data => {
            setProject(data)
        })
        Api.listEmployee().then(data => {
            setEmployee(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const onSubmit = async() => {
        const payload= {
            pras_proj_id: values.pras_proj_id,
            pras_employee_id: values.pras_employee_id,
            pras_startdate: values.pras_startdate,
            pras_enddate: values.pras_enddate,
            pras_status: values.pras_status
            
        }
       
        await Api.addProjectAssignment(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    const onEdit = async() => {
        const payload= {
            pras_proj_id: (id.assigntID),
            pras_employee_id: values.pras_employee_id,
            pras_startdate: values.pras_startdate,
            pras_enddate: values.pras_enddate,
            pras_status: values.pras_status
            
        }
       
        await Api.addProjectAssignment(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    const onDelete = async(id) =>{
        Api.deleteProjectAssignment(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (assignID) => {
        setDisplayEdit(true)
        setId(assignID)
    }


    return (
        <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                
                {
                    displayEdit ?
                    <ProjectAssignmentEditForm
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        project={project}
                        employee={employee}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display?
                    <ProjectAssignmentForm
                        onSubmit={onSubmit}
                        handleOnChange={handleOnChange}
                        setDisplay={setDisplay}
                        project={project}
                        employee={employee}
                    />
                    :
                        <>

                            <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Project Assigment </button>    
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <th scope="col" className="px-6 py-3">Pras Proj Id</th>
                                    <th scope="col" className="px-6 py-3">Pras Employee Id</th>
                                    <th scope="col" className="px-6 py-3">Pras Start Date</th>
                                    <th scope="col" className="px-6 py-3">Pras End Date</th>
                                    <th scope="col" className="px-6 py-3">Pras Status</th>
                                    <th scope="col" className="px-6 py-3">Action</th>    
                                </thead>
                                <tbody className="overscroll-auto md:overscroll-contain">
                                    {
                                        assignment&&assignment.map( ass => (
                                            <tr key={ass.pras_proj_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{ass.pras_proj_id}</td>
                                                <td className="px-6 py-2">{ass.pras_employee_id}</td>
                                                <td className="px-6 py-2">{ass.pras_startdate}</td>
                                                <td className="px-6 py-2">{ass.pras_enddate}</td>
                                                <td className="px-6 py-2">{ass.pras_status}</td>
                                                <button type="button"
                                                        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                                        onClick={() => onDelete(ass.pras_proj_id)}> Delete </button>
                                                <button type="button"
                                                        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" 
                                                        onClick={() => onClick({ assignID: ass.pras_proj_id })}> Edit </button>
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
