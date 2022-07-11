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
        <div style={{ margin: "5px", padding: "10px"}}>
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
                            <h2>List Department</h2>
                            <button onClick={() => setDisplay(true)}> Add Department </button>
                            <table rules='all' border='1'>
                                <th align='center'>Department ID</th>
                                <th align='center'>Department Name</th>
                                <th align='center'>Location ID</th>
                                <th align='center'>Action</th>
                                <tbody>
                                    {
                                        department&&department.map( dept => (
                                            <tr key={dept.department_id}>
                                                <td>{dept.department_id}</td>
                                                <td>{dept.department_name}</td>
                                                <td>{dept.location_id}</td>
                                                <button onClick={() => onDelete(dept.department_id)}> Delete </button>
                                                <button onClick={() => onClick({ departID: dept.department_id })}> Edit </button>
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
