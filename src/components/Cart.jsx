import React from 'react'
import './Cart.css'
import { ProductContext } from './Context/ProductContextProvider'
import { useContext } from 'react'
import { LiaShoppingBagSolid } from 'react-icons/lia'
const Cart = () => {
    const { countCart } = useContext(ProductContext)
    return (
        <div className='cart'>
            <img src="http://127.0.0.1:5500/baitapcuoikhoa/imgs/blog/Shopping%20Bag.png" alt="" />
            <div>{countCart}</div>
            <LiaShoppingBagSolid />
        </div >
    )
}

export default Cart
