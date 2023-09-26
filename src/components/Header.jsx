import React from 'react'
import './Header.css'
import { AiOutlineUser } from 'react-icons/ai'
import Search from './Search'
import Social from './Social'
import Cart from './cart/Cart'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie'
function Header() {
    const dataCookie = Cookies.get('data');
    const data = dataCookie ? JSON.parse(dataCookie) : null;
    const HandleLogout = () => {
        Cookies.remove("data")
    }
    return (
        <div className="header">
            <div className='container'>
                <div className="header-1">
                    <div className='header_user'>
                        <NavLink className='user_header' to={'/login'} onClick={HandleLogout}>
                            <AiOutlineUser size={20} />
                            {data ? <p>{data.fullName}</p> : null}
                        </NavLink>

                    </div>
                    <div className="header_content">
                        <div className="contact_info">
                            <p className="info_title">
                                <span>Gọi ngay : 1900 6750</span>
                                - Hỗ trợ 7 ngày trong tuần từ 9h - 21h
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header-2">
                    <Social />
                    <div className="container_content">
                        <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/logo.png?1676015117086" alt="" />
                    </div>
                    <div className='container_cart'>
                        <Cart />
                    </div>
                </div>

            </div>
            <div className='container'>
                <Nav />
            </div>
        </div >
    )
}

export default Header
