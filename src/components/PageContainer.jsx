import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './PageContainer.css'
function PageContainer() {
    return (
        <div className='PageContainer'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default PageContainer
