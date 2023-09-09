import React, {useEffect, useState} from 'react'
import './Cart.css'
import { ProductContext } from '../Context/ProductContextProvider'
import { useContext } from 'react'
import { LiaShoppingBagSolid } from 'react-icons/lia'
const Cart = () => {
    const { countCart } = useContext(ProductContext)

    const [cartsData, cartsDataChange] = useState();

    useEffect(() => {
        fetch("http://localhost:3001/carts").then((res) => res.json())
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
