import React from 'react'
import './Content.css'
import Introduce from './Introduce'
import ProductList from './ProductList'
import HotDeal from './HotDeal'
import Info from './Info'
import New from './New'
const Content = () => {
    return (
        <div >
            <div className='container'>
                <Introduce />
                <ProductList />
                <HotDeal />
                <Info />
                <New />

            </div>
        </div>
    )
}

export default Content
