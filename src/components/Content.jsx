import React from 'react'
import './Content.css'
import Introduce from './Introduce'
import ProductList from './ProductList'
const Content = () => {
    return (
        <div >
            <div className='content_banner'><img src="http://127.0.0.1:5500/baitapcuoikhoa/imgs/banner/banner.jpg" alt="" /></div>
            <div className='container'>
                <Introduce />
                <ProductList />
            </div>
        </div>
    )
}

export default Content
