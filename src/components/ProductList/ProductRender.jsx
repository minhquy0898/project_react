import React, { useState } from 'react'
import axios from 'axios';
import './ProductRender.css';
import shoppingBag from '../../img/shopping-bag.png'
import { useEffect } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContextProvider';
import { NavLink } from 'react-router-dom';
function ProductRender() {
<<<<<<< HEAD
    const { product, setCart, cart, setProduct, countCart, handleClickBuy, sortTypeProduct, selectType, sortProduct, selectMenu, filterProduct, setFilterProduct } = useContext(ProductContext)
=======
    const { setProduct, countCart, handleClickBuy, sortTypeProduct, selectType, sortProduct, selectMenu, filterProduct, setFilterProduct } = useContext(ProductContext)
    const [cartData, cartDataChange] = useState()
>>>>>>> 2b3b917ff9993d8e01ad31518183d767fef56d50
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
        fetch("http://localhost:3001/carts")
            .then((res) => res.json())
            .then((resp) => cartDataChange(resp))
            .catch((e) => console.log(e.message))
    })

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
        fetchData();
        sortTypeProduct(selectType);
    }, [selectType]);
    const handleAddToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng của sản phẩm đó
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            setCart(updatedCart);
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };
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
                            <button onClick={() => {
                                handleClickBuy()


                                let method = "POST";
                                const product = item;

                                const ct = cartData.filter((x) => x.product.id == item.id);
                                let quantity = 1;
                                let ctId = "";

                                if (ct.length > 0) {
                                    quantity = ct[0].quantity + 1
                                    ctId = ct[0].id
                                    method = "PUT"
                                }

                                const cart = { product, quantity }



                                fetch("http://localhost:3001/carts/" + ctId, {
                                    method: method,
                                    headers: { "content-type": "application/json" },
                                    body: JSON.stringify(cart)
                                }).catch((e) => console.log(e.message))

                            }}>
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
