import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import DependentForm from '../FormApi/DependentForm'

export default function DependentView() {
    const [dependent,setDependent] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
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

    return (
        <div>
        <div style={{ margin: "5px", padding: "10px" }} >
                <h2>List Dependent</h2>
                <button onClick={() => setDisplay(true)}> Add Dependent </button>
                {
                    display?
                    <DependentForm
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                            employee_id={employee_id}
                            
                            />
                    :
                        <>
                            <table rules='all' border='1'>
                                <th align='center'>Dependent ID</th>
                                <th align='center'>First Name</th>
                                <th align='center'>Last Name</th>
                                <th align='center'>Relationship</th>
                                <th align='center'>Employee ID</th>
                                <th align='center'>Action</th>
                                <tbody>
                                    {
                                        dependent&&dependent.map( depen => (
                                            <tr key={depen.dependent_id}>
                                                <td>{depen.dependent_id}</td>
                                                <td>{depen.first_name}</td>
                                                <td>{depen.last_name}</td>
                                                <td>{depen.relationship}</td>
                                                <td>{depen.employee_id}</td>
                                                <button onClick={() => onDelete(depen.dependent_id)}> Delete Dependent </button>
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
