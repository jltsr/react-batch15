import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import CountryForm from '../FormApi/CountryForm'
import CountryEditForm from '../FormApi/CountryEditForm'

export default function CountryView() {
    const [country,setCountry] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState({})
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
    const onEdit = async () => {
        const payload = {
            country_id: (id.countID),
            country_name: values.country_name,
            region_id: values.region_id
        }

        await Api.updateCountry(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully update')
            })

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

    const onClick = (countID) => {
        setDisplayEdit(true)
        setId(countID)
    }

    return (
        <div>
        <div style={{ margin: "5px", padding: "10px" }}>
                
                {
                    displayEdit ?
                    <CountryEditForm
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        region_id={region_id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display?
                    <CountryForm
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                            region_id={region_id}
                            
                            />
                    :
                        <>
                        <h2>List Country</h2>
                        <button onClick={() => setDisplay(true)}> Add Country </button>
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
                                                <button onClick={() => onDelete(count.country_id)}> Delete </button>
                                                <button onClick={() => onClick({ countID: count.country_id })}> Edit </button>
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
