import React, { useState, useEffect }  from 'react'
import Api from '../Api/Api'

export default function DependentForm(props) {
    const [dependent, setDependent] = useState([])

  useEffect(() => {
        Api.findOneDependent(props.id.depenID).then(data => {
            setDependent(data)
        })
        
    },[])
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Dependent ID : </label>
                <input type="number" value={dependent.dependent_id} 
                onChange = {props.handleOnChange('dependent_id')} readOnly />
            </div>
            <div>
                <label>First Name : </label>
                <input type="text" placeholder={dependent.first_name} 
                onChange = {props.handleOnChange('first_name')} required/>
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" placeholder={dependent.last_name} 
                onChange = {props.handleOnChange('last_name')} required/>
            </div>
            <div>
                <label>Relationship : </label>
                <input type="text" placeholder={dependent.relationship} 
                onChange = {props.handleOnChange('relationship')} required/>
            </div>
            <div>
                <label>Employee ID : </label>
                <select  onChange ={props.handleOnChange('employee_id')}>
                    <option>{dependent.employee_id}</option>
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
