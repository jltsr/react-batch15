import React from 'react'

export default function ProjectAssignmentForm(props) {
  return (
    <div class="max-w-2xl mx-auto bg-white p-16">
         <form onSubmit={props.onSubmit}>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project ID</label>
                <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none" onChange ={props.handleOnChange('pras_proj_id')}>
                    <option>Choise Project</option>
                    {
                        props.project&&props.project.map(proj=>(
                            <option value={proj.proj_id}>{proj.proj_name}</option>
                        ))
                    }
                </select>
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Employee ID</label>
                <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none" onChange ={props.handleOnChange('pras_employee_id')}>
                    <option>Choise Employee </option>
                    {
                        props.employee&&props.employee.map(emp=>(
                            <option value={emp.employee_id}>{emp.first_name+' '+emp.last_name}</option>
                        )) 
                    }
                </select>
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div >
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Start Date</label>
                    <input type="text" placeholder='Start Date' 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange = {props.handleOnChange('pras_startdate')} />
                </div>
                <div >
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">End Date</label>
                    <input type="text" placeholder='End Date' 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange = {props.handleOnChange('pras_enddate')} />
                </div>
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
                <input type="text" placeholder='Status' 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange = {props.handleOnChange('pras_status')} />
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
