import React, { useState, useEffect }  from 'react'
import Api from '../Api/Api'

export default function ProjectEditForm(props) {
    const [project, setPoject] = useState([])
    useEffect(() => {
        Api.findOneProject(props.id.projID).then(data => {
            setPoject(data)
        })
        
    },[])
  return (
    <div class="max-w-2xl mx-auto bg-white p-16">
        <form onSubmit={props.onSubmit}>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project ID </label>
                <input type="number" value={project.proj_id}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange = {props.handleOnChange('project_id')} required/>
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project Name</label>
                <input type="Text" placeholder={project.proj_name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange = {props.handleOnChange('project_name')} required/>
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div >
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project Createdon</label>
                    <input type="Text" placeholder={project.proj_createdon}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    onChange = {props.handleOnChange('proj_createdon')} required/>
                </div>
                <div >
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project Duedate</label>
                    <input type="Text" placeholder={project.proj_duedate}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    onChange = {props.handleOnChange('proj_duedate')} required/>
                </div>
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project Customer Name</label>
                <input type="Text" placeholder={project.proj_cust_name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange = {props.handleOnChange('proj_cust_name')} required/>
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project Desciption</label>
                <textarea type="address" placeholder={project.proj_description}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange = {props.handleOnChange('proj_description')} />
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project Status</label>
                <input type="Text" placeholder={project.proj_status}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange = {props.handleOnChange('proj_status')} required/>
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project Amount</label>
                <input type="Text" placeholder={project.proj_amount}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange = {props.handleOnChange('proj_amount')} />
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project Account Manager</label>
                <input type="Text" placeholder={project.proj_account_mgr}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange = {props.handleOnChange('proj_account_mgr')} />
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Employee ID : </label>
                <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none" onChange ={props.handleOnChange('employee_id')}>
                    <option>{project.employee_id}</option>
                    {
                        props.employee&&props.employee.map(emp=>(
                            <option value={emp.employee_id}>{emp.first_name+' '+emp.last_name}</option>
                        ))
                        
                        
                    }
                </select>
            </div>
            <div class="mb-6">
                <button type='submit'
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}
                type="button"
                class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"> Cancel </button>
            </div>


            

        </form>
      
    </div>
  )
}
