import Catagory from '../Catagory'
import React, { useContext, useEffect } from 'react'
import shoppingBag from '../../img/shopping-bag.png'
import './ProductDetail.css'
import { useParams } from 'react-router';
import { ProductContext } from '../Context/ProductContextProvider';
import axios from 'axios';

function ProductDetail() {
    const { productDetail, setProductDetail, handleChangeQuantity, quantityCount } = useContext(ProductContext)
    const { productId } = useParams();
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/Product/${productId}`);
            setProductDetail(response.data)
            console.log(response.data);

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [productId]);


    if (!productDetail) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            <Catagory></Catagory>
            <div style={{ display: 'flex', marginTop: 25, marginBottom: 25 }}>
                <img src={productDetail.img} alt="" style={{ width: 450, height: 450, marginRight: 15 }} />
                <div style={{ paddingRight: 50 }}>
                    <h2 className='Bigtitle'>{productDetail.name}</h2>
                    <div>
                        <div style={{ display: 'flex', marginBottom: 25 }}>
                            <p className='priceBase'>{`${parseInt(productDetail.price).toLocaleString("vi-VN")}VNĐ`}</p>
                            {productDetail.discount !== 0 && (
                                <p className='priceDisCount'>{`${productDetail.discount}%`}</p>
                            )}
                        </div>
                        <hr />
                        <p style={{ marginTop: 25, marginBottom: 25 }}>{productDetail.detail}</p>
                        <hr />
                        <div style={{ display: 'flex', marginTop: 15, marginBottom: 20 }}>
                            <div className='quantityBtn'>
                                <button className='btn' onClick={() => handleChangeQuantity('decrease')}>-</button>
                                <button className='btn'>{quantityCount}</button>
                                <button className='btn' onClick={() => handleChangeQuantity('increase')}>+</button>
                            </div>
                            <button className='btnBuy'>
                                <img src={shoppingBag} alt="" style={{ height: 25, width: 25, marginRight: 15 }} />
                                <h2 style={{ color: 'white', fontWeight: 600 }}>Mua hàng</h2>
                            </button>
                        </div>
                        <hr />
                        <div className='tag'>
                            <p style={{ marginRight: 25 }}>Tags:</p>
                            <div>
                                {productDetail.tags.map((item, index) => {
                                    return (
                                        <button key={index} className='btnTag'>{item}</button>
                                    )
                                })}
                            </div>
                        </div>
                        <hr />
                    </div>


                </div>
            </div>
            <div className='desc'>
                <h2 className='BigContent'>Mô tả</h2>
                <p className='descText'>
                    {productDetail.description}
                </p>
            </div>
            <hr />
            <div className='RelatedProduct'>

            </div>
        </div>
    )
}

export default ProductDetail
