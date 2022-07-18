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
    <div class="max-w-2xl mx-auto bg-white p-16">
        <form onSubmit={props.onSubmit}>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Department ID</label>
                <input type="number"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={department.department_id} 
                onChange = {props.handleOnChange('department_id')} required/>
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Department Name</label>
                <input type="text" placeholder={department.department_name} 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange = {props.handleOnChange('department_name')} required/>
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location ID </label>
                <select  onChange ={props.handleOnChange('location_id')}
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none">
                    <option>{department.location_id} </option>
                    {
                        props.location_id&&props.location_id.map(reg=>(
                            <option value={reg.location_id}>{reg.city}</option>
                        ))
                        
                        
                    }
                </select>
            </div>
            
            <div>
                <button type='submit'
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Simpan </button>
                <button onClick={()=>props.setDisplay(false)}
                type="button"
                class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                     Cancel </button>
            </div>
        </form>
      
    </div>
  )
}
