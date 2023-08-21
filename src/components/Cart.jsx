import React from 'react'
import './Cart.css'
import { ProductContext } from './Context/ProductContextProvider'
import { useContext } from 'react'
import { LiaShoppingBagSolid } from 'react-icons/lia'
const Cart = () => {
    const { countCart } = useContext(ProductContext)
    return (
        <div className='cart'>
            <div>{countCart}</div>
            <LiaShoppingBagSolid />
        </div >
    )
}

export default Cart
