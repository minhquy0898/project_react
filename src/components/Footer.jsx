import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='wrapper_footer'>
            <div className="footer_support">
                <p className="footer_title">
                    Tổng đài hổ trợ miễn phí <br />
                </p>
                <p className='footer_desc'>
                    Gọi mua hàng 1800.2097 (7h30 - 22h00) <br />
                    Gọi khiếu nại 1800.2063 (8h00 - 21h30)<br />
                    Gọi bảo hành 1800.2064 (8h00 - 21h00)</p> <br />
                Phương thức thanh toán
                <div className='footer_pay'>

                    <ul className='pay_list'>
                        <li className='list_item'>
                            <a href="">
                                <img src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png" alt="" />
                            </a>
                        </li>
                        <li className='list_item'>
                            <a href="">
                                <img src="	https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png" alt="" />
                            </a>
                        </li>
                        <li className='list_item'>
                            <a href="">
                                <img src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png" alt="" />
                            </a>
                        </li>
                        <li className='list_item'>
                            <a href="">
                                <img src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/moca-logo.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='footer_info'>
                <p className='info_title'>
                    Thông tin và chính sách
                </p>
                <p className='info_desc'>
                    Mua hàng và thanh toán Online <br />
                    Mua hàng trả góp Online <br />
                    Chính sách giao hàng <br />
                    Tra điểm Smember</p>
            </div>
            <div className='footer_other'>
                <p className='other_title'>
                    Dịch vụ thông tin kh
                </p>
                <p className='other_desc'>
                    Khách hàng doanh nghiệp (B2B) <br />
                    Ưu đãi thanh toán <br />
                    Quy chế hoạt động <br />
                    Chính sách Bảo hành
                </p>
            </div>
            <div className='cellphone'>
                <p className='cellphone_title'>Kết nối với CellphoneS</p>
                <ul className='list_item'>
                    <li className='item'>
                        <a href="">
                            <img src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png" alt="" />
                        </a>
                    </li>
                    <li className='item'>
                        <a href="">
                            <img src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png" alt="" />
                        </a>
                    </li>
                    <li className='item'>
                        <a href="">
                            <img src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
