import React from 'react'

export default function DepartmentForm(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Department ID : </label>
                <input type="number" placeholder="Department ID" 
                onChange = {props.handleOnChange('department_id')} required/>
            </div>
            <div>
                <label>Department Name : </label>
                <input type="text" placeholder="Department Name" 
                onChange = {props.handleOnChange('department_name')} required/>
            </div>
            <div>
                <label>Location ID : </label>
                <select  onChange ={props.handleOnChange('location_id')}>
                    <option>Choice Location</option>
                    {
                        props.location_id&&props.location_id.map(reg=>(
                            <option value={reg.location_id}>{reg.city}</option>
                        ))
                        
                        
                    }
                </select>
            </div>
            
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
      
    </div>
  )
}
