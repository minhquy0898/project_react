import React from 'react'
import './ProductList.css';
import ProductListHv from './ProductListHv';
const ProductList = () => {
    return (
        <div>
            <div className="product_list">
                <h1 className="list_title">Danh mục sản phẩm</h1>
                <hr className='line' />
                <div className="product_content">
                    <div className="product_item">
                        <img src="https://bizweb.dktcdn.net/100/191/458/collections/index-10-min.jpg?v=1491141436857" alt="" />
                        <ProductListHv />
                    </div>
                    <div className="product_item">
                        <img src="https://bizweb.dktcdn.net/100/191/458/collections/index-11-min.jpg?v=1491141492513" alt="" />
                        <ProductListHv />
                    </div>
                    <div className="product_item">
                        <img src="https://bizweb.dktcdn.net/100/191/458/collections/index-08-min.jpg?v=1491141456377" alt="" />
                        <ProductListHv />
                    </div>
                    <div className="product_item">
                        <img src="https://bizweb.dktcdn.net/100/191/458/collections/index-09-min.jpg?v=1491141474023" alt="" />
                        <ProductListHv />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductList
