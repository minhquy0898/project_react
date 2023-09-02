import { FaChevronRight } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContextProvider";
import { NavLink } from 'react-router-dom'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'
const CartDetail = () => {
    const { cart, setCart, setCountCart, countCart } = useContext(ProductContext)
    const [cartsData, cartsDataChange] = useState([]);
    let totalPrice = 0;

    useEffect(() => {
        fetch("http://localhost:3001/carts").then((res) => res.json())
            .then((resp) => {
                cartsDataChange(resp);
            }).catch((e) => console.log(e.message))
    })

    const cartDelete = (itemToRemove) => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            const deleteCart = cart.filter(item => item.id !== itemToRemove.id)
            setCart(deleteCart)
            setCountCart(countCart - itemToRemove.quantity)
        }
    }

    const cartDeleteAll = (event) => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            setCart([])
            setCountCart(0);
            alert("Xóa thành công!")
        }
    }
    const handleSubmitCart = async () => {
        const newOrderId = uuidv4();
        const newOrder = [
            {
                id: newOrderId,
                status: 'Chờ xác nhận'
            }
        ];

        const updatedCarts = [...cart, newOrder];

        try {
            await axios.post(`http://localhost:3001/carts`, updatedCarts, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            alert('Đơn hàng của bạn đã được đặt thành công')
            setCart([])
            setCountCart(0)
        } catch (error) {

        }
    }
    console.log('cart sau khi thêm', cart);
    return (
        <div className="cart-detail">
            <div className="pd-64-h d-flex align-items-center">
                <NavLink to={'/'} className="home-link">Trang chủ </NavLink>
                <FaChevronRight size={10} color="grey"
                    className="mg-icon-5"></FaChevronRight>
                <NavLink
                    to="/cart-detail" className="cart-link">Giỏ hàng</NavLink>
            </div>
            <div className="cart-products">
                <table className="table-cart table">
                    <thead>
                        <th>Ảnh sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Xóa</th>
                    </thead>
                    <tbody>
                        {
                            cart && cart.map(item => (
                                <tr>
                                    <td>
                                        <span
                                            className="hidden">{totalPrice += (item.price * item.quantity)}</span>
                                        <img src={item.img[0]} alt=""
                                            width="80px" className="mg-img-auto" /></td>
                                    <td><p
                                        className="mg-text-26">{item.name}</p>
                                    </td>
                                    <td><p
                                        className="mg-text-26">{`${parseInt(item.price).toLocaleString("vi-VN")}VNĐ`}</p>
                                    </td>
                                    <td>
                                        <QuantityCart quantity={item.quantity}
                                            cartId={item.id}
                                            product={item.product}></QuantityCart>
                                    </td>

                                    <td><p
                                        className="mg-text-26">{`${parseInt(item.price * item.quantity).toLocaleString("vi-VN")}VNĐ`}</p>
                                    </td>
                                    <td><p className="mg-text-26"><AiOutlineDelete
                                        size={25} className="m-auto"
                                        onClick={() => cartDelete(item)} /></p></td>
                                </tr>
                            ))
                        }
                        <tr className="total">
                            <td colSpan={4} className="sum">Tổng tiền</td>
                            <td colSpan={2} className="money">{`${parseInt(totalPrice).toLocaleString("vi-VN")}VNĐ`}</td>
                        </tr>
                        <tr>
                            <td className="lst-btn" colSpan={6}>
                                <div className="d-flex justify-content-between"
                                    style={{ padding: "10px" }}>
                                    <div className="d-flex">
                                        <NavLink to="/product" className="next-buy btn-cart"
                                            style={{ marginRight: "10px" }}>Tiếp tục mua hàng</NavLink>

                                        <NavLink to="/cart-detail" onClick={() => cartDeleteAll()} className="delete-all-cart btn-cart">Xóa toàn bộ giỏ hàng
                                        </NavLink>
                                    </div>
                                    <NavLink to="/payment" onClick={() => { handleSubmitCart() }} className="payment-btn text-decoration-none" style={{ color: "white" }}>Tiến hành đặt hàng</NavLink>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CartDetail


function QuantityCart(props) {


    const product = props.product;
    let quantityCart = props.quantity;
    const handleSubmit = (id, quantity) => {
        const cartUpdate = { id, quantity, product };

        fetch("http://localhost:3001/carts/" + id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cartUpdate)
        }).catch((e) => console.log(e.message))
    };

    return (<div className="quantity-cart mg-text-26">
        <button onClick={() => {
            if (quantityCart <= 0) {
                quantityCart = 0;
            } else {
                quantityCart -= 1;
            }
            handleSubmit(props.cartId, quantityCart)
        }}>-
        </button>
        <input type="text" value={quantityCart} />
        <button onClick={() => {
            if (quantityCart >= 20) {
                quantityCart = 20;
            } else {
                quantityCart += 1
            }
            handleSubmit(props.cartId, quantityCart)
        }}>+
        </button>
    </div>)
}
