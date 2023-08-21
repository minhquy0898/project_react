import React from 'react'
import './ListItemProduct.css'
const ListItemProduct = (props) => {
    const { content, img, nameItem, titleItem, price } = props
    return (
        <div className='list_item_product'>
            <div className="new_product">
                <h3 className='product_light'>{content}</h3>
                <hr className='line_light' />
            </div>
            <div className="item_new">
                <div className="unit">
                    <div className="img">
                        <img src={img} alt={img} />
                    </div>
                    <div className="text_unit">
                        <p className='product_desc'>{nameItem}</p>
                        <p className='product_name'>{titleItem}</p>
                        <p className="product_price">{price}</p>
                    </div>
                </div>
            </div>
            <div className="item_new">
                <div className="unit">
                    <div className="img">
                        <img src={img} alt={img} />
                    </div>
                    <div className="text_unit">
                        <p>{nameItem}</p>
                        <p className='product_name'>{titleItem}</p>
                        <p className="product_price">{price}</p>
                    </div>
                </div>
            </div>
            <div className="item_new">
                <div className="unit">
                    <div className="img">
                        <img src={img} alt={img} />
                    </div>
                    <div className="text_unit">
                        <p>{nameItem}</p>
                        <p className='product_name'>{titleItem}</p>
                        <p className="product_price">{price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItemProduct
