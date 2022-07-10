import React from 'react'

export default function JobForm(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Job ID : </label>
                <input type="number" placeholder="Job ID" 
                onChange = {props.handleOnChange('job_id')} required/>
            </div>
            <div>
                <label>Job Title : </label>
                <input type="text" placeholder="Job Title" 
                onChange = {props.handleOnChange('job_title')} required/>
            </div>
            <div>
                <label>Min Salary : </label>
                <input type="number" placeholder="Min Salary" 
                onChange = {props.handleOnChange('min_salary')}/>
            </div>
            <div>
                <label>Max Salary : </label>
                <input type="number" placeholder="Max Salary" 
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
