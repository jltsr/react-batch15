import React,{useState,useEffect} from 'react'
import Api from '../Api/Api'
import RegionForm from '../FormApi/RegionForm'

export default function RegionView() {
    const [region,setRegion] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [values, setValues] = useState({
        region_id: undefined,
        region_name: '',
    })

    useEffect(() => {
        Api.listRegion().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange= name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const onSubmit = async() => {
        const payload= {
            region_name : values.region_name
        }

        await Api.addRegion(payload)
            .then(() =>{
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    const onDelete = async(id) =>{
        Api.deleteRegion(id)
            .then(() =>{
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    return (
        <div>
        <div style={{ margin: "5px", padding: "10px" }}>
                <h2>List Region</h2>
                <button onClick={() => setDisplay(true)}> Add Region </button>
                {
                    display ?
                        <RegionForm
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                    :
                        <>
                            <table rules='all' border='1'>
                                <th align='center'>Region ID</th>
                                <th align='center'>Region Name</th>
                                <th align='center'>Action</th>
                                <tbody>
                                    {
                                        region&&region.map( reg => (
                                            <tr key={reg.region_id}>
                                                <td>{reg.region_id}</td>
                                                <td>{reg.region_name}</td>
                                                <button onClick={() => onDelete(reg.region_id)}> Delete Region </button>
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
