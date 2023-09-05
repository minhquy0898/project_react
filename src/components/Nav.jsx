import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className="header_nav-bottom">
            <div className="header-3">
                <div className="header-3_item">
                    <a href="src/components/Nav">Trang chủ</a>
                </div>
                <div className="header-3_item">
                    <a href="src/components/Nav">Sản phẩm</a>
                </div>
                <div className="header-3_item">
                    <a href="src/components/Nav">Blog</a>
                </div>
                <div className="header-3_item">
                    <a href="src/components/Nav">Giới thiệu</a>
                </div>
                <div className="header-3_item">
                    <a href="src/components/Nav">Liên hệ</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
