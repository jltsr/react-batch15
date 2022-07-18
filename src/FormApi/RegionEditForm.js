import React, { useState, useEffect }  from 'react'
import Api from '../Api/Api'

export default function RegionForm(props) {
  const [region, setRegion] = useState([])

  useEffect(() => {
        Api.findOneRegion(props.id.regID).then(data => {
            setRegion(data)
        })
        
    },[])
  return (
    <div class="max-w-2xl mx-auto bg-white p-16">
       <form onSubmit={props.onSubmit}>
          <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Region ID </label>
              <input type="text" value={region.region_id}
                onChange = {props.handleOnChange('region_id')} 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly/>
          </div>
          <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Region Name</label>
              <input type="text" placeholder={region.region_name}
                onChange = {props.handleOnChange('region_name')}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              readOnly/>
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
