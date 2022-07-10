import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import JobForm from '../FormApi/JobForm'

export default function JobView() {
    const [job,setJob] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [values, setValues] = useState({
        job_id: '',
        job_title: '',
        min_salary:'',
        max_salary : ''
    })

    useEffect(() => {
        Api.listJob().then(data => {
            setJob(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const onSubmit = async() => {
        const payload= {
            job_id : values.job_id,
            job_title : values.job_title,
            min_salary : values.min_salary,
            max_salary : values.max_salary
        }
       
        await Api.addJob(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    const onDelete = async(id) =>{
        Api.deleteJob(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    return (
        <div>
        <div style={{ margin: "5px", padding: "10px"}}>
                <h2>List Job</h2>
                <button onClick={() => setDisplay(true)}> Add Job </button>
                {
                    display?
                    <JobForm
                        onSubmit={onSubmit}
                        handleOnChange={handleOnChange}
                        setDisplay={setDisplay}
                        
                    />
                    :
                        <>
                            <table rules='all' border='1'>
                                <th align='center'>Job ID</th>
                                <th align='center'>Min Salary</th>
                                <th align='center'>Max Salary</th>
                                <th align='center'>Job Title</th>
                                <th align='center'>Action</th>
                                <tbody>
                                    {
                                        job&&job.map( j => (
                                            <tr key={j.job_id}>
                                                <td>{j.job_id}</td>
                                                <td>{j.min_salary}</td>
                                                <td>{j.max_salary}</td>
                                                <td>{j.job_title}</td>
                                                <button onClick={() => onDelete(j.job_id)}> Delete Job </button>
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
