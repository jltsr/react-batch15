import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import JobForm from '../FormApi/JobForm'
import JobEditForm from '../FormApi/JobEditForm'

export default function JobView() {
    const [job,setJob] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
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

    const onEdit = async() => {
        const payload= {
            job_id : (id.jID),
            job_title : values.job_title,
            min_salary : values.min_salary,
            max_salary : values.max_salary
        }
       
        await Api.updateJob(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
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

    const onClick = (jID) => {
        setDisplayEdit(true)
        setId(jID)
    }

    return (
        <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
               
                {
                    displayEdit ?
                    <JobEditForm
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display?
                    <JobForm
                        onSubmit={onSubmit}
                        handleOnChange={handleOnChange}
                        setDisplay={setDisplay}
                        
                    />
                    :
                        <>
                            <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Job </button>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                    <th scope="col" className="px-6 py-3">Job ID</th>
                                    <th scope="col" className="px-6 py-3">Min Salary</th>
                                    <th scope="col" className="px-6 py-3">Max Salary</th>
                                    <th scope="col" className="px-6 py-3">Job Title</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="overscroll-auto md:overscroll-contain">
                                    {
                                        job&&job.map( j => (
                                            <tr key={j.job_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{j.job_id}</td>
                                                <td className="px-6 py-2">{j.min_salary}</td>
                                                <td className="px-6 py-2">{j.max_salary}</td>
                                                <td className="px-6 py-2">{j.job_title}</td>
                                                <button type="button"
                                                        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => onDelete(j.job_id)}> Delete</button>
                                                <button onClick={() => onClick({ jID: j.job_id })}
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
