import React, { useState, useEffect }  from 'react'
import Api from '../Api/Api'


export default function CountryForm(props) {

    const [country, setCountry] = useState([])

  useEffect(() => {
        Api.findOneCountry(props.id.countID).then(data => {
            setCountry(data)
        })
        
    },[])
  return (
    <div>
      <form onSubmit={props.onSubmit}>
            <div>
                <label>Country ID : </label>
                <input type="text" value={country.country_id}
                onChange = {props.handleOnChange('country_id')} readOnly/>
            </div>
            <div>
                <label>Country Name : </label>
                <input type="text" placeholder={country.country_name}
                onChange = {props.handleOnChange('country_name')}/>
            </div>
            <div>
                <label>Region ID : </label>
                <select  onChange ={props.handleOnChange('region_id')}>
                    <option>{country.region_id}</option>
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
