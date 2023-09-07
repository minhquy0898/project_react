import React from 'react'
import './HotDeal.css'
import Slider from 'react-slick';
const HotDeal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='hotDeal'>
            <div className='content_hotDeal'>
                <h2 className='hotDeal_title'>Hot Deal</h2>
                <hr className='line_hotDeal' />
            </div>
            <Slider {...settings}>
                <div className='hotDeal_body'>
                    <div className='hotDeal_introduce'>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/8-1-26e44d88-8656-4580-9ce6-9ef0518d26f3.jpg?v=1490840698907" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Bông tai cao cấp BIZ</p>
                                <p className='hotDeal_price'>350.000đ</p>
                            </div>
                        </div>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/9-4-df6e6054-0c41-4235-bc57-be3c8c406cd4.jpg?v=1528211760227" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Nhẫn thời trang</p>
                                <p className='hotDeal_price'>650.000đ</p>
                            </div>
                        </div>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/6-4-94480226-1174-4722-b6cf-5b68c244215d.jpg?v=1490840635903" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Vòng tay Nheo</p>
                                <p className='hotDeal_price'>999.000đ</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='hotDeal_body'>
                    <div className='hotDeal_introduce'>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/8-1-26e44d88-8656-4580-9ce6-9ef0518d26f3.jpg?v=1490840698907" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Bông tai cao cấp BIZ</p>
                                <p className='hotDeal_price'>350.000đ</p>
                            </div>
                        </div>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/9-4-df6e6054-0c41-4235-bc57-be3c8c406cd4.jpg?v=1528211760227" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Nhẫn thời trang</p>
                                <p className='hotDeal_price'>650.000đ</p>
                            </div>
                        </div>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/6-4-94480226-1174-4722-b6cf-5b68c244215d.jpg?v=1490840635903" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Vòng tay Nheo</p>
                                <p className='hotDeal_price'>999.000đ</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='hotDeal_body'>
                    <div className='hotDeal_introduce'>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/8-1-26e44d88-8656-4580-9ce6-9ef0518d26f3.jpg?v=1490840698907" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Bông tai cao cấp BIZ</p>
                                <p className='hotDeal_price'>350.000đ</p>
                            </div>
                        </div>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/9-4-df6e6054-0c41-4235-bc57-be3c8c406cd4.jpg?v=1528211760227" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Nhẫn thời trang</p>
                                <p className='hotDeal_price'>650.000đ</p>
                            </div>
                        </div>
                        <div className="hotDeal_info">
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/191/458/products/6-4-94480226-1174-4722-b6cf-5b68c244215d.jpg?v=1490840635903" alt="" />
                            <div className="hotDeal_desc">
                                <p className='hotDeal_desc'>Vòng tay Nheo</p>
                                <p className='hotDeal_price'>999.000đ</p>
                            </div>
                        </div>
                    </div>

                </div>

            </Slider>
        </div>
    )
}

export default HotDeal
