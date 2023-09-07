import React from 'react'
import './Content.css'
import Introduce from './Introduce'
import ProductList from './ProductList'
import HotDeal from './HotDeal'
import Info from './Info'
import New from './New'
import Introduce2 from './Introduce2'
import ProductItem from './ProductItem'
import Discount from './Discount'
const Content = () => {
    return (
        <div >
            <div className='container'>
                <Introduce />
                <ProductList />
                <HotDeal />
                <Info />
                <New />
                <Introduce2 />
                <ProductItem />
                <Discount />
            </div>
        </div>
    )
}

export default Content
