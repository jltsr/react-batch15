import React, { useState, useEffect }  from 'react'
import Api from '../Api/Api'


export default function JobForm(props) {
    const [job, setJob] = useState([])

  useEffect(() => {
        Api.findOneJob(props.id.jID).then(data => {
            setJob(data)
        })
        
    },[])
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Job ID : </label>
                <input type="number" value={job.job_id} 
                onChange = {props.handleOnChange('job_id')} required/>
            </div>
            <div>
                <label>Job Title : </label>
                <input type="text" placeholder={job.job_title} 
                onChange = {props.handleOnChange('job_title')} required/>
            </div>
            <div>
                <label>Min Salary : </label>
                <input type="number" placeholder={job.min_salary} 
                onChange = {props.handleOnChange('min_salary')}/>
            </div>
            <div>
                <label>Max Salary : </label>
                <input type="number" placeholder={job.max_salary} 
                onChange = {props.handleOnChange('max_salary')}/>
            </div>
            
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
      
    </div>
  )
}
