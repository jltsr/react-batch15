import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import config from '../Config/Config'
import EmployeeForm from '../FormApi/EmployeeForm'
import EmployeeEditForm from '../FormApi/EmployeeEditForm'

export default function EmployeeView() {
    const [employee,setEmployee] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
    const [job,setJob] = useState([])
    const [department,setDepartment] = useState([])
    

    useEffect(() => {
        Api.listEmployee().then(data => {
            setEmployee(data)
        })

        Api.listJob().then(data=>{
            setJob(data)
        })
        Api.listDepartment().then(data=>{
            setDepartment(data)
        })
        setRefresh(false)
    },[refresh])

    const onDelete = async (id) => {
        Api.deleteEmployee(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (empID) => {
        setDisplayEdit(true)
        setId(empID)
    }

    return (
        <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                
                {
                    displayEdit
                    ?
                    <EmployeeEditForm
                        closeAdd={() => setDisplayEdit(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        job={job}
                        department={department}
                        employee={employee}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                        <EmployeeForm
                            job={job}
                            department={department}
                            employee={employee}
                            setDisplay={setDisplay}
                            closeAdd={() => setDisplay(false)}
                            onRefresh={() => setRefresh(true)}
                        />
                        :
                        <>
                            <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Employee </button>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                    <th scope="col" className="px-6 py-3">Employee Id</th>
                                    <th scope="col" className="px-6 py-3">First Name</th>
                                    <th scope="col" className="px-6 py-3">Last Name</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Phone</th>
                                    <th scope="col" className="px-6 py-3">Hire Date</th>
                                    <th scope="col" className="px-6 py-3">Job Id</th>
                                    <th scope="col" className="px-6 py-3">Salary</th>
                                    <th scope="col" className="px-6 py-3">Manager Id</th>
                                    <th scope="col" className="px-6 py-3">Department Id</th>
                                    <th scope="col" className="px-6 py-3">Employee Profile</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>   
                                
                                </thead>    
                                <tbody className="overscroll-auto md:overscroll-contain">
                                    {
                                        employee&&employee.map( emp => (
                                            <tr key={emp.employee_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{emp.employee_id}</td>
                                            <td className="px-6 py-2">{emp.first_name}</td>
                                            <td className="px-6 py-2">{emp.last_name}</td>
                                            <td className="px-6 py-2">{emp.email}</td>
                                            <td className="px-6 py-2">{emp.phone_number}</td>
                                            <td className="px-6 py-2">{emp.hire_date}</td>
                                            <td className="px-6 py-2">{emp.job_id}</td>
                                            <td className="px-6 py-2">{emp.salary}</td>
                                            <td className="px-6 py-2">{emp.manager_id}</td>
                                            <td className="px-6 py-2">{emp.department_id}</td>
                                            <td className="px-6 py-2"><img crossOrigin='annonymous' src={config.urlImage+emp.emp_profile} width='100px' alt='NotFound'/></td>
                                            <button type="button"
                                                        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => onDelete(emp.employee_id)}> Delete</button>
                                            <button onClick={() => onClick(emp.employee_id)}
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
