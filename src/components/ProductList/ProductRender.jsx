import React from 'react'
import axios from 'axios';
import './ProductRender.css';
import shoppingBag from '../../img/shopping-bag.png'
import { useEffect, useState } from 'react';
function ProductRender() {
    const [product, setProduct] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/Product');
            setProduct(response.data)

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
        console.log('product', product);
    }, []);
    return (
        <div>
            <div className='productlist'>
                {product.map((item) => {
                    return (
                        <div key={item.id} className='product'>
                            <img src={item.img} className='productImg' />
                            <h4 className='productName'>{item.name}</h4>
                            <div className='productPrice'>
                                <h4 className='priceBase'>{item.price}</h4>
                                {item.discount !== null && (
                                    <p className='priceDisCount'>{item.discount}</p>
                                )}
                            </div>
                            <button>
                                <img src={shoppingBag} alt="" className='ShoppingBagIcon' />
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className='Page'>
                <button className='buttonPage'>1</button>
                <button className='buttonPage'>2</button>
            </div>
        </div>
    )
}

export default ProductRender
