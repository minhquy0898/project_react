import React, {useEffect, useState} from 'react'
import './Cart.css'
import { ProductContext } from '../Context/ProductContextProvider'
import { useContext } from 'react'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import {Cookies} from "react-cookie";
const Cart = () => {
    const { countCart } = useContext(ProductContext)
    const [cartsData, cartsDataChange] = useState();

    const cookies = new Cookies();
    const user = cookies.get("jwt");
    let filter = user != null ? "user="+user : "device_id="+localStorage.getItem("device_id")
    useEffect(() => {
        fetch("http://localhost:3001/carts?"+filter).then((res) => res.json())
            .then((resp) => cartsDataChange(resp)).catch((e) => console.log(e.message))
    })
    return (
        <div className='cart'>
            <div>{cartsData != null ? Object.keys(cartsData).length : 0}</div>
            <a href="/cart-detail"><LiaShoppingBagSolid /></a>
        </div >
    )
}

export default Cart
