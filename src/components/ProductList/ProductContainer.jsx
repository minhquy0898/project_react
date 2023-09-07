import React from 'react'
import Example from './DropDown'
import './ProductContainer.css'
import ProductRender from './ProductRender'
function ProductContainer() {
    return (
        <div className='ProductContainer'>
            <Example></Example>
            <ProductRender></ProductRender>
        </div>
    )
}

export default ProductContainer
