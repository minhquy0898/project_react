import React from 'react'
import axios from 'axios';
import './ProductRender.css';
import shoppingBag from '../../img/shopping-bag.png'
import { useEffect } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContextProvider';
import { NavLink } from 'react-router-dom';
function ProductRender() {
    const { setProduct, countCart, handleClickBuy, sortTypeProduct, selectType, sortProduct, selectMenu, filterProduct, setFilterProduct } = useContext(ProductContext)
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/Product');
            setProduct(response.data)
            setFilterProduct(response.data)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, []);
    useEffect(() => {
        fetchData();
    }, [countCart])
    useEffect(() => {
        fetchData()
        sortProduct(selectMenu)
    }, [selectMenu])
    useEffect(() => {
        sortTypeProduct();
    }, [selectType]);
    return (
        <div>
            <div className='productlist'>
                {filterProduct.map((item) => {
                    return (
                        <div key={item.id} className='product'>
                            <img src={item.img} className='productImg' />
                            <NavLink to={`${item.id}`} className='productName'>{item.name}</NavLink>
                            <div className='productPrice'>
                                <h4 className='priceBase'>{item.price === 'Liên hệ' ? 'Liên hệ' : `${parseInt(item.price).toLocaleString("vi-VN")}VNĐ`}</h4>
                                {item.discount !== 0 && (
                                    <p className='priceDisCount'>{`${item.discount}%`}</p>
                                )}
                            </div>
                            <button onClick={() => { handleClickBuy() }}>
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
