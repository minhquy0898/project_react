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
import Login from './Login/Login'
import Management from './OrderManagement/Management'

function PageContainer() {
    if (window.location.pathname.split('/')[1] === "payment") {
        return <Payment />
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='*'
                    element={
                        <div className='PageContainer'>
                            <Header></Header>
                            <Routes>
                                <Route path='/' element={<Content></Content>}></Route>
                                <Route path='/product' element={<ProductPageContainer></ProductPageContainer>}></Route>
                                <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
                                <Route path="/cart-detail" element={<CartDetail />}></Route>
                                <Route path='/Order' element={<Management></Management>}></Route>
                            </Routes>
                            <Footer />
                        </div>
                    }>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageContainer
