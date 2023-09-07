import { FaChevronRight } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContextProvider";
import { NavLink } from 'react-router-dom'
import axios from "axios";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from 'uuid'
const CartDetail = () => {
<<<<<<< HEAD
    const username = Cookies.get('jwt');
    const { cart, setCart, setCountCart, countCart } = useContext(ProductContext)
    const [cartsData, cartsDataChange] = useState([]);
=======
    const [cartsData, cartsDataChange] = useState();
>>>>>>> 2b3b917ff9993d8e01ad31518183d767fef56d50
    let totalPrice = 0;

    useEffect(() => {
        fetch("http://localhost:3001/carts").then((res) => res.json())
            .then((resp) => cartsDataChange(resp)).catch((e) => console.log(e.message))
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
        const newOrder =
        {
            "id": newOrderId,
            "status": 'Chờ xác nhận',
            "username": username

        };

        const updatedCarts = [...cart, newOrder];
        console.log('lỗi', updatedCarts);
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
            console.log(error);
        }
    }

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
                            cartsData && cartsData.map(cart => (
                                <tr>
                                    <td>
                                        <span
                                            className="hidden">{totalPrice += (cart.product.price * cart.quantity)}</span>
                                        <img src={cart.product.img[0]} alt=""
                                            width="80px" className="mg-img-auto" /></td>
                                    <td><p
                                        className="mg-text-26">{cart.product.name}</p>
                                    </td>
                                    <td><p
                                        className="mg-text-26">{new Intl.NumberFormat('vi', {
                                            currency: 'VND'
                                        }).format(cart.product.price)}₫</p>
                                    </td>
                                    <td>
                                        <QuantityCart quantity={cart.quantity}
                                            cartId={cart.id}
                                            product={cart.product}></QuantityCart>
                                    </td>
                                    <td><p
                                        className="mg-text-26">{new Intl.NumberFormat('vi', {
                                            currency: 'VND'
                                        }).format(cart.product.price * cart.quantity)}₫ </p>
                                    </td>
                                    <td><p className="mg-text-26"><AiOutlineDelete
                                        size={25} className="m-auto"
                                        onClick={() => cartDelete(cart.id)} /></p></td>
                                </tr>
                            ))
                        }
                        <tr className="total">
                            <td colSpan={4} className="sum">Tổng tiền</td>
                            <td colSpan={2} className="money">{new Intl.NumberFormat('vi', {
                                currency: 'VND'
                            }).format(totalPrice)}₫</td>
                        </tr>
                        <tr>
                            <td className="lst-btn" colSpan={6}>
                                <div className="d-flex justify-content-between"
                                    style={{ padding: "10px" }}>
                                    <div className="d-flex">
                                        <a href="/product"
                                            className="next-buy btn-cart"
                                            style={{ marginRight: "10px" }}>Tiếp tục
                                            mua hàng</a>

                                        <a href="/cart-detail" onClick={() => cartDeleteAll()}
                                            className="delete-all-cart btn-cart">Xóa
                                            toàn bộ giỏ hàng
                                        </a>
                                    </div>
                                    <a href="/payment"
                                        className="payment-btn text-decoration-none"
                                        style={{ color: "white" }}>Tiến hành đặt
                                        hàng</a>
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
