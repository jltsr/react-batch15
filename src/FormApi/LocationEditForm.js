import React, { useState, useEffect }  from 'react'
import Api from '../Api/Api'

export default function LocationForm(props) {
    const [location, setLocation] = useState([])

  useEffect(() => {
        Api.findOneLocation(props.id.locID).then(data => {
            setLocation(data)
        })
        
    },[])
  return (
    <div>
       <form onSubmit={props.onSubmit}>
            <div>
                <label>Location ID : </label>
                <input type="number" value={location.location_id} 
                onChange = {props.handleOnChange('location_id')} readOnly/>
            </div>
            <div>
                <label>Street Address : </label>
                <input type="text" placeholder={location.street_address} 
                onChange = {props.handleOnChange('street_address')}/>
            </div>
            <div>
                <label>Postal Code : </label>
                <input type="text" placeholder={location.postal_code} 
                onChange = {props.handleOnChange('postal_code')}/>
            </div>
            <div>
                <label>City : </label>
                <input type="text" placeholder={location.city}  
                onChange = {props.handleOnChange('city')} required/>
            </div>
            <div>
                <label>State Province : </label>
                <input type="text" placeholder={location.state_province}  
                onChange = {props.handleOnChange('state_province')}/>
            </div>
            <div>
                <label>Country ID : </label>
                <select onChange={props.handleOnChange('country_id')}>
                    <option>{location.country_id} </option>
                    {
                        props.country_id&&props.country_id.map(coun=>(
                            <option value={coun.country_id}>{coun.country_name}</option>
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
