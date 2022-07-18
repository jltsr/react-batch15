import React,{useState} from 'react'
import { useFormik } from 'formik'
import Api from '../Api/Api'

export default function EmployeeForm(props) {
    const [previewImg, setPreviewImg] = useState();
    const [uploaded, setUploaded] = useState(false);
    const formik = useFormik({
        initialValues: {
            employee_id:'',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            job_id: 0,
            salary: 0,
            manager_id: 0,
            department_id: 0,
            emp_profile: undefined
        },
        onSubmit: async (values) => {
            let payload = new FormData();
            payload.append('employee_id', values.employee_id)
            payload.append('first_name', values.first_name)
            payload.append('last_name', values.last_name)
            payload.append('email', values.email)
            payload.append('phone_number', values.phone_number)
            payload.append('job_id', parseInt(values.job_id))
            payload.append('salary', (values.salary))
            payload.append('manager_id', parseInt(values.manager_id))
            payload.append('department_id', parseInt(values.department_id))
            payload.append('emp_profile', values.profile)

            await Api.addEmployee(payload)
                .then(() => {
                    props.closeAdd();
                    window.alert('Data Succesfully Insert')
                    props.onRefresh();
                })

        }
    })

    const uploadOnChange = name => event => {
        let reader = new FileReader()
        let file = event.target.files[0]

        reader.onload = () => {
            formik.setFieldValue('profile', file);
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file);
        setUploaded(true)
    }

    const onClearImage = event => {
        event.preventDefault();
        setUploaded(false);
        setPreviewImg(null)
    }
  return (
    <div class="max-w-2xl mx-auto bg-white p-16">
            <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Employee ID</label>
            <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                name="employee_id"
                id="employee_id"
                value={formik.values.employee_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="employee id"
            />
        </div>
        <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="first_name" required/>
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="last_name"
                        requiredrequired/>
                </div>
            </div>
        

        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email : </label>
            <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
                required
            />
        </div>
        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number : </label>
            <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="phone_number"
                id="phone_number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="phone_number"
            />
        </div>
        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job ID : </label>
            <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none"
                    name='job_id'
                    id='job_id'
                    value={formik.values.job_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="job_id"    >
                    <option>Choise Job</option>
                    {
                        props.job&&props.job.map(j=>(
                            <option value={j.job_id}>{j.job_title}</option>
                        ))
                        
                        
                    }
                </select>
        </div>
        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary : </label>
            <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="salary"
                id="salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="salary"
                required
            />
        </div>
        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manager ID : </label>
            <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none"
                    name='manager_id'
                    id='manager_id'
                    value={formik.values.manager_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="manager_id"    >
                    <option>Choise Manager</option>
                    {
                        props.employee&&props.employee.map(emp=>(
                            <option value={emp.employee_id}>{emp.first_name+' '+emp.last_name}</option>
                        ))
                        
                        
                    }
                </select>
        </div>
        <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Department ID : </label>
            <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300
                            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none"
                    name="department_id"
                    id="department_id"
                    value={formik.values.department_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="department_id"    >
                    <option>Choise Department</option>
                    {
                        props.department&&props.department.map(dep=>(
                            <option value={dep.department_id}>{dep.department_name}</option>
                        ))
                        
                        
                    }
                </select>
        </div>
        <div>
                <label class="block text-sm font-medium text-gray-700">Profile : </label>
                <div>
                    <div>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                {
                                    uploaded === false ?
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <>
                                            <img src={previewImg} alt='image' />
                                            <span class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" onClick={onClearImage}>Remove</span>
                                        </>
                                }

                                <div class="flex text-sm text-gray-600">
                                    <label for="profile" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="profile" name="profile" type="file" accept='image/*' onChange={uploadOnChange('file')} class="sr-only" />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-6">
            <button type='submit' onClick={formik.handleSubmit}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Simpan </button>
            <button onClick={() => props.setDisplay(false)}
            type="button"
            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"> Cancel </button>
        </div>
        </div>
  )
}
