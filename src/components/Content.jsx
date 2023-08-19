import React from 'react'
import './Content.css'
import Introduce from './Introduce'
import ProductList from './ProductList'
import HotDeal from './HotDeal'
import Info from './Info'
const Content = () => {
    return (
        <div >
            <div className='container'>
                <Introduce />
                <ProductList />
                <HotDeal />
                <Info />
            </div>
        </div>
    )
}

export default Content
