import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="header_nav-bottom">
            <div className="header-3">
                <div className="header-3_item">
                    <NavLink to={'/'}>Trang chủ</NavLink>
                </div>
                <div className="header-3_item">
                    <NavLink to={'/product'}>Sản phẩm</NavLink>
                </div>
                <div className="header-3_item">
                    <NavLink to={'/Order'}>Đơn hàng</NavLink>
                </div>
                <div className="header-3_item">
                    <a href="">Giới thiệu</a>
                </div>
                <div className="header-3_item">
                    <a href="">Liên hệ</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
