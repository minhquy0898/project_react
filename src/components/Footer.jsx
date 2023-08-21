import React from 'react'
import { ImLocation } from 'react-icons/im'
import { BsPinterest } from 'react-icons/bs'
import { AiFillPhone, AiFillMail, AiFillFacebook, AiFillGoogleCircle, AiFillInstagram } from 'react-icons/ai'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_content">
                    <div className="img_footer">
                        <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/logo.png?1676015117086" alt="" />
                        <p>Theme Trang sức là một theme bán hàng thân thiện với mobile. Với cơ chế tùy chỉnh hoàn hảo cho phép quý khách tùy chỉnh màu sắc, bố cục.</p>
                        <div className="address">
                            <div className="address_content">
                                <ImLocation className='icon' />
                                <p className='address_desc'>Ladeco Building, 266 Doi Can Street, Hà Nội, </p>
                            </div>
                            <div className="address_content">
                                <AiFillPhone className='icon' />
                                <p className='address_desc_phone'>1900 6750,</p>
                            </div>
                            <div className="address_content">
                                <AiFillMail className='icon' />
                                <a href="" className='link'>support@sapo.com</a>
                            </div>
                        </div>
                        <div className="footer_2">
                            <div className='footer_social'>
                                <AiFillFacebook className='mg-right' />
                                <BsPinterest className='mg-right' />
                                <AiFillGoogleCircle className='mg-right' />
                                <AiFillInstagram />
                            </div>
                        </div>
                        <div className="copy_right">
                            <p>© Bản quyền thuộc về </p>
                            <p className='bold'> DQDT Team </p>
                            <p>| Cung cấp bởi</p>
                            <a href="" className='footer_link'>Sapo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
