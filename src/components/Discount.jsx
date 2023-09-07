import React from 'react'
import './Discount.css'
const Discount = () => {
    return (
        <div className='discount'>
            <div className="discoutn_form">
                <h1>Đăng ký nhận khuyến mãi</h1>
                <p>Chúng tôi sẽ gửi thông tin các chương trình khuyến mãi mới nhất cho bạn</p>
                <form action="src/components/Discount" className='register_form'>
                    <input type="email" name='email' id='email' placeholder='Email của bạn' />
                    <button className='btn_discount'>Đăng ký</button>
                </form>
            </div>
        </div>
    )
}

export default Discount
