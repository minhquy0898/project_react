import React, { useState } from 'react'
import NewProductItem from './NewProductItem'
const data = [
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/191/458/articles/jewlery.jpg?v=1489905439857",
        name: "Dây chuyền kim cương quý giá nhất ",
        title: "Đăng bởi Admin . bình luận",
        text: "Thông thường, đồ nữ trang nên có màu sắc cùng tông với trang phục. Tuy nhiên trong một số trường hợp, sự tương phản giữa chúng lại khiến bạn trở nên quyến rũ. Bạn sẽ"
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/191/458/articles/first-of-post.jpg?v=1489905362260",
        name: "Lựa dây chuyền hợp màu da",
        title: "Đăng bởi Admin . bình luận",
        text: "Thông thường, đồ nữ trang nên có màu sắc cùng tông với trang phục. Tuy nhiên trong một số trường hợp, sự tương phản giữa chúng lại khiến bạn trở nên quyến rũ. Bạn sẽ"
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/191/458/articles/final45.jpg?v=1489905392773",
        name: "Phong cách phối đồ ấn tượng",
        title: "Đăng bởi Admin . bình luận",
        text: "Thông thường, đồ nữ trang nên có màu sắc cùng tông với trang phục. Tuy nhiên trong một số trường hợp, sự tương phản giữa chúng lại khiến bạn trở nên quyến rũ. Bạn sẽ"
    }
]
const New = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [dataDetail, setDataDetail] = useState({})
    return (
        <div className='embraceNew'>
            <div className='head'>
                <h1 className='new_title'>Tin tức khuyến mãi</h1>
                <hr className='line_new' />
            </div>
            <div className='container_new_product'>
                {data && data.map((item, index) => {

                    return (
                        <NewProductItem setDataDetail={setDataDetail} setIsShowModal={setIsShowModal} key={index} img={item.img} name={item.name} title={item.titel} text={item.text} />
                    )
                })}
            </div>
        </div>
    )
}

export default New
