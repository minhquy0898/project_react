import React from 'react'
// import Footer from './Footer'
import Header from './Header'
import Content from './Content'
import './PageContainer.css'
function PageContainer() {
    return (
        <div className='PageContainer'>
            <Header />
            <Content />
            {/* <Footer /> */}
        </div>
    )
}

export default PageContainer
