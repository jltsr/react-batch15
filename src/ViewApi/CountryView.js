import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import CountryForm from '../FormApi/CountryForm'

export default function CountryView() {
    const [country,setCountry] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [region_id,setRegion_id] = useState([])
    const [values, setValues] = useState({
        country_id: '',
        country_name: '',
        region_id:'',
    })
    useEffect(() => {
        Api.listCountry().then(data => {
            setCountry(data)
        })
        Api.listRegion().then(data=>{
            setRegion_id(data)
        })
        setRefresh(false)
    },[refresh])

    
    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const onSubmit = async() => {
        const payload= {
            country_id: values.country_id,
            country_name: values.country_name,
            region_id: values.region_id
        }
       
        await Api.addCountry(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
        
       
    }
   
    const onDelete = async(id) =>{
        Api.deleteCountry(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    return (
        <div>
        <div style={{ margin: "5px", padding: "10px" }}>
                <h2>List Country</h2>
                <button onClick={() => setDisplay(true)}> Add Country </button>
                {
                    display?
                    <CountryForm
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                            region_id={region_id}
                            
                            />
                    :
                        <>
                            <table rules='all' border='1'>
                                <th align='center'>Country ID</th>
                                <th align='center'>Country Name</th>
                                <th align='center'>Region ID</th>
                                <th align='center'>Action</th>
                                <tbody>
                                    {
                                        country&&country.map( count => (
                                            <tr key={count.country_id}>
                                                <td>{count.country_id}</td>
                                                <td>{count.country_name}</td>
                                                <td>{count.region_id}</td>
                                                <button onClick={() => onDelete(count.country_id)}> Delete Country </button>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                }
            </div>
    </div>
  )
}
