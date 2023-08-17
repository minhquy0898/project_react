import Catagory from '../Catagory'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import shoppingBag from '../../img/shopping-bag.png'
import './ProductDetail.css'
import ProductContainer from '../ProductList/ProductContainer';
function ProductDetail() {
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/Product/${productId}`);
            setProductDetail(response.data)

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
        console.log('productDetail', productDetail);
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
                            <p className='priceBase'>{productDetail.price}</p>
                            <p className='priceDisCount'>{productDetail.discount}</p>
                        </div>
                        <hr />
                        <p style={{ marginTop: 25, marginBottom: 25 }}>{productDetail.detail}</p>
                        <hr />
                        <div style={{ display: 'flex', marginTop: 15, marginBottom: 20 }}>
                            <div className='quantityBtn'>
                                <button className='btn'>-</button>
                                <button className='btn'>1</button>
                                <button className='btn'>+</button>
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
                                {productDetail.Tags.map((item) => {
                                    return (
                                        <button className='btnTag'>{item}</button>
                                    )
                                })}
                            </div>
                        </div>
                        <hr />
                    </div>

                </div>
            </div>
            <div>
                <h2>Mô tả</h2>
            </div>
        </div>
    )
}

export default ProductDetail
