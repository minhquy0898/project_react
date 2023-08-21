import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './PageContainer.css'
import ProductPageContainer from './ProductPageContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './ProductDetail/ProductDetail'

function PageContainer() {
    return (
        <div className='PageContainer'>
            <Header></Header>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Content></Content>}></Route>
                    <Route path='/product' element={<ProductPageContainer></ProductPageContainer>}></Route>
                    <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default PageContainer
