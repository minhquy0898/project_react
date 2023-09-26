import React from 'react'
import './ProductListHv.css'
import { NavLink } from 'react-router-dom'
const ProductListHv = () => {
    return (
        <div>
            <NavLink to={'/product'} className='product_list_hover'>
                <h5>Trâm cài</h5>
                <p className='product_block'>4 sản phẩm</p>
            </NavLink>
        </div>
    )
}

export default ProductListHv
