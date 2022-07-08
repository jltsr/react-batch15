import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChartForm from '../form/ChartForm'
import { doGetCart,doAddCart } from '../Toolkit/CartSlice'

export default function CartToolkit() {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.cartStore.carts)
    const Category = useSelector(state => state.cartStore.category)
    const totalHarga = useSelector(state => state.cartStore.totalHarga)
    const totalQty = useSelector(state => state.cartStore.totalQty)

    const [display,setDisplay] = useState(false)
    const [values,setValues] = useState ({
        prodName : undefined,
        salary : 0,
        qty : 0,
        Category : undefined
    }) 

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const payload = {
            prodId: (Math.round(Math.random() * 10)),
            prodName: values.prodName,
            salary: values.salary,
            qty: values.qty,
            Category: values.Category
        }
        dispatch(doAddCart(payload))
        setDisplay(false)
    }
    const onSelectOnChange = event =>{
        const value = event.target.selectedIndex !== 0 ? 
        event.target.options[event.target.selectedIndex].value : null
        setValues({...values, Category : value})
    }

  return (
    <div>
            <div>
                <h2>List cartloyee</h2>
                <button onClick={() => setDisplay(true)}> Add Product </button>
                {
                    display ?
                        <ChartForm
                            onSubmitForm={onSubmit}
                            handleOnChange={handleOnChange}
                            Category={Category}
                            onSelectOnChange={onSelectOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
                            <table>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Salary</th>
                                <th>Category</th>
                                <th>Subtotal</th>
                                <tbody>
                                    {
                                        (carts || []).map(cart => (
                                            <tr key={cart.prodId}>
                                                <td>{cart.prodId}</td>
                                                <td>{cart.prodName}</td>
                                                <td>{cart.qty}</td>
                                                <td>{cart.salary}</td>
                                                <td>{cart.Category}</td>
                                                <td>{cart.qty * cart.salary}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <h3>Total Salary : Rp. {totalHarga}</h3>
                            <h3>Total Quantity : {totalQty}</h3>
                        </>
                }
            </div>
        </div>
  )
}