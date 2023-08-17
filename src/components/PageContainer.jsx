import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './PageContainer.css'
import ProductPageContainer from './ProductPageContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './ProductDetail/ProductDetail'
function PageContainer() {
    return (
        <div className='PageContainer'>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/product' element={<ProductPageContainer></ProductPageContainer>}></Route>
                    <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}

export default PageContainer
