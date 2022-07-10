import React from 'react'

export default function CountryForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
            <div>
                <label>Country ID : </label>
                <input type="text" placeholder="Country ID" 
                onChange = {props.handleOnChange('country_id')} required/>
            </div>
            <div>
                <label>Country Name : </label>
                <input type="text" placeholder="Country Name" 
                onChange = {props.handleOnChange('country_name')}/>
            </div>
            <div>
                <label>Region ID : </label>
                <select  onChange ={props.handleOnChange('region_id')}>
                    <option>Choice Region</option>
                    {
                        props.region_id&&props.region_id.map(reg=>(
                            <option value={reg.region_id}>{reg.region_name}</option>
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
