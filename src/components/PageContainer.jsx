import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './PageContainer.css'
import Catagory from './Catagory'
import BodyContainer from './ProductList/BodyContainer'
function PageContainer() {
    return (
        <div className='PageContainer'>
            <Header></Header>
            <Catagory></Catagory>
            <BodyContainer></BodyContainer>
            <Footer></Footer>
        </div>
    )
}

export default PageContainer
