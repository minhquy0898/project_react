import {FaChevronRight} from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";
import {useEffect, useState} from "react";
import {Cookies} from "react-cookie";

const CartDetail = () => {
    const [cartsData, cartsDataChange] = useState();
    let totalPrice = 0;

    const cookies = new Cookies();
    const user = cookies.get("jwt");
    let filter = user != null ? "user_id="+user : "device_id="+localStorage.getItem("device_id")
    useEffect(() => {
        fetch("http://localhost:3001/carts?"+filter).then((res) => res.json())
            .then((resp) => cartsDataChange(resp)).catch((e) => console.log(e.message))
    })

    const cartDelete = (cartId) => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            fetch("http://localhost:3001/carts/" + cartId, {
                method: "DELETE"
            }).then((res) => {
                window.location.reload();
                alert("Xóa thành công!")
            }).catch((e) => console.log(e.message))
        }
    }

    const cartDeleteAll = () => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            cartsData.filter((x)=>(user != null) ? x.user === user : x.device_id === localStorage.getItem("device_id")).forEach(x=>{
                fetch("http://localhost:3001/carts/" + x.id, {
                    method: "DELETE"
                }).catch((e) => console.log(e.message))
            })
            alert("Xóa thành công!")
        }
    }

    return (
        <div className="cart-detail">
            <div className="pd-64-h d-flex align-items-center">
                <a href="/" className="home-link">Trang chủ </a>
                <FaChevronRight size={10} color="grey"
                                className="mg-icon-5"></FaChevronRight>
                <a
                    href="/cart-detail" className="cart-link">Giỏ hàng</a>
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
                                         width="80px" className="mg-img-auto"/></td>
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
                                    onClick={() => cartDelete(cart.id)}/></p></td>
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
                                 style={{padding: "10px"}}>
                                <div className="d-flex">
                                    <a href="/product"
                                       className="next-buy btn-cart"
                                       style={{marginRight: "10px"}}>Tiếp tục
                                        mua hàng</a>

                                    <a href="/cart-detail" onClick={()=> cartDeleteAll()}
                                       className="delete-all-cart btn-cart">Xóa
                                        toàn bộ giỏ hàng
                                    </a>
                                </div>
                                <a href="/payment"
                                   className="payment-btn text-decoration-none"
                                   style={{color: "white"}}>Tiến hành đặt
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
            headers: {"content-type": "application/json"},
            body: JSON.stringify(cartUpdate)
        }).catch((e) => console.log(e.message))
    };

    return (<div className="quantity-cart mg-text-26">
        <button onClick={() => {
            if (quantityCart <= 1) {
                if (window.confirm("Bạn có muốn xóa không?")) {
                    fetch("http://localhost:3001/carts/" + props.cartId, {
                        method: "DELETE"
                    }).then((res) => {
                        window.location.reload();
                    }).catch((e) => console.log(e.message))
                }else{
                    window.close()
                }
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
