import React, { useState, useEffect }  from 'react'
import Api from '../Api/Api'


export default function DepartmentForm(props) {
    const [department, setDepartment] = useState([])

  useEffect(() => {
        Api.findOneDepartment(props.id.departID).then(data => {
            setDepartment(data)
        })
        
    },[])
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Department ID : </label>
                <input type="number" value={department.department_id} 
                onChange = {props.handleOnChange('department_id')} required/>
            </div>
            <div>
                <label>Department Name : </label>
                <input type="text" placeholder={department.department_name} 
                onChange = {props.handleOnChange('department_name')} required/>
            </div>
            <div>
                <label>Location ID : </label>
                <select  onChange ={props.handleOnChange('location_id')}>
                    <option>{department.location_id} </option>
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
