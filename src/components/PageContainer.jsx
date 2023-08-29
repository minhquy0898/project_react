import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './PageContainer.css'
import ProductPageContainer from './ProductPageContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './ProductDetail/ProductDetail'
import CartDetail from "./cart/CartDetail";
import Payment from "./payment/Payment";

function PageContainer() {
    if (window.location.pathname.split('/')[1] === "payment") {
        return <Payment />
    }
    return (
        <div className='PageContainer'>
            <Header></Header>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Content></Content>}></Route>
                    <Route path='/product' element={<ProductPageContainer></ProductPageContainer>}></Route>
                    <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
                    <Route path="/cart-detail" element={<CartDetail />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default PageContainer
