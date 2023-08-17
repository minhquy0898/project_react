import React from 'react'
import ProductContainer from '../ProductList/ProductContainer'
import './BodyContainer.css'
import LeftBar from '../LeftBar/LeftBar'
function BodyContainer() {
    return (
        <div className='BodyContainer'>
            <ProductContainer></ProductContainer>
            <LeftBar></LeftBar>
        </div>
    )
}

export default BodyContainer
