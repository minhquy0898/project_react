import React from 'react'
import './NewProductItem.css'
const NewProductItem = (props) => {
    const { img, name, title, text } = props
    return (
        <div className='product_new_item'>
            <div className="container_new">
                <div className="body_new">
                    <div className="new_product">
                        <img src={img} alt={img} />
                        <div className="new_detail">
                            <div className="new_content">
                                <h5 className="new_name">{name}</h5>
                                <p className="new_comment">Đăng bởi Admin . bình luận</p>
                            </div>
                            <p className="new_text">{text}</p>
                            <div className="wrapper">Chi tiết</div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewProductItem
