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
    <div style={{ margin: "5px", padding: "10px"}}>
      <h2>Edit Region</h2>
       <form onSubmit={props.onSubmit}>
            <table>
              <tr>
              <td>
              <label>Region ID : </label>
              </td>
              <td>
              <input type="text" value={region.region_id}
                onChange = {props.handleOnChange('region_id')} readOnly/>
              </td>
              </tr>
              <tr>
                <td>
                <label>Region Name : </label>

                </td>
                <td>
                <input type="text" placeholder={region.region_name}
                onChange = {props.handleOnChange('region_name')}/>

                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
                </td>
              </tr>
            </table>
    
          
                
                
            
        </form>
    </div>
  )
}
