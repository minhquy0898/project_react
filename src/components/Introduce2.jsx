import React from 'react'
import './Introduce2.css'

import Slider from 'react-slick';
const Introduce2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='introduce_2_img'>
                    <div className='info_introduce'>
                        <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/testimonial1.jpg?1676015117086" alt="" />
                        <p className='introduce_desc'>Sản phẩm tốt , thái độ phục vụ chu đáo, đây là nơi mà tôi luôn tin tưởng suốt mấy năm qua</p>
                    </div>
                </div>
                <div className='introduce_2_img'>
                    <div className="info_introduce">
                        <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/testimonial2.jpg?1676015117086" alt="" />
                        <p className='introduce_desc'>Sản phẩm tốt , thái độ phục vụ chu đáo, đây là nơi mà tôi luôn tin tưởng suốt mấy năm qua</p>
                    </div>
                </div>
                <div className='introduce_2_img'>
                    <div className="info_introduce">
                        <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/testimonial3.jpg?1676015117086" alt="" />
                        <p className='introduce_desc'>Sản phẩm tốt , thái độ phục vụ chu đáo, đây là nơi mà tôi luôn tin tưởng suốt mấy năm qua</p>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Introduce2
