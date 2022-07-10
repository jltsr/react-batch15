import React from 'react'

export default function DependentForm(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Dependent ID : </label>
                <input type="number" placeholder="Dependent ID" 
                onChange = {props.handleOnChange('dependent_id')} required />
            </div>
            <div>
                <label>First Name : </label>
                <input type="text" placeholder="First Name" 
                onChange = {props.handleOnChange('first_name')} required/>
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" placeholder="Last Name" 
                onChange = {props.handleOnChange('last_name')} required/>
            </div>
            <div>
                <label>Relationship : </label>
                <input type="text" placeholder="Relationship" 
                onChange = {props.handleOnChange('relationship')} required/>
            </div>
            <div>
                <label>Employee ID : </label>
                <select  onChange ={props.handleOnChange('employee_id')}>
                    <option>Choice Employee</option>
                    {
                        props.employee_id&&props.employee_id.map(emp=>(
                            <option value={emp.employee_id}>{emp.first_name+' '+emp.last_name}</option>
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
