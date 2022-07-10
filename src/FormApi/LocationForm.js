import React from 'react'

export default function LocationForm(props) {
  return (
    <div>
       <form onSubmit={props.onSubmit}>
            <div>
                <label>Location ID : </label>
                <input type="number" placeholder="Location ID" 
                onChange = {props.handleOnChange('location_id')} required/>
            </div>
            <div>
                <label>Street Address : </label>
                <input type="text" placeholder="Street Address" 
                onChange = {props.handleOnChange('street_address')}/>
            </div>
            <div>
                <label>Postal Code : </label>
                <input type="text" placeholder="Postal Code" 
                onChange = {props.handleOnChange('postal_code')}/>
            </div>
            <div>
                <label>City : </label>
                <input type="text" placeholder="City" 
                onChange = {props.handleOnChange('city')} required/>
            </div>
            <div>
                <label>State Province : </label>
                <input type="text" placeholder="State Province" 
                onChange = {props.handleOnChange('state_province')}/>
            </div>
            <div>
                <label>Country ID : </label>
                <select onChange={props.handleOnChange('country_id')}>
                    <option>Choice Country</option>
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
