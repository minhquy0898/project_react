import React, { useEffect } from 'react'
import './Cart.css'
import { ProductContext } from '../Context/ProductContextProvider'
import { useContext } from 'react'
import { LiaShoppingBagSolid } from 'react-icons/lia'
const Cart = () => {
    const { countCart } = useContext(ProductContext)

    return (
        <div className='cart'>
            <div>{countCart}</div>
            <a href="/cart-detail"><LiaShoppingBagSolid /></a>
        </div >
    )
}

export default Cart
