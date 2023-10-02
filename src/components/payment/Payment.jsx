import { useEffect, useState, useContext } from "react";
import './Payment.css'
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { ProductContext } from "../Context/ProductContextProvider";
import axios from "axios";
const Payment = () => {

    const { newOrder, setNewOrder } = useContext(ProductContext)
    const [email, emailChange] = useState("")
    const [fullName, fullNameChange] = useState("");
    const [phoneNumber, phoneNumberChange] = useState("");
    const [address, addressChange] = useState("");
    const [province, provinceChange] = useState("")
    const [provinces, provincesChange] = useState("")
    const [payOnDelivery, payOnDeliveryChange] = useState(false)
    const [checkSaleCode, checkSaleCodeChange] = useState(false)
    const [discountCode, discountCodeChange] = useState("")
    const [salePrice, salePriceChange] = useState(0)
    const [ward, wardCodeChange] = useState("")
    const [countryData, countryDataChange] = useState([])
    const [selectedCountry, selectedCountryChange] = useState("vn")
    const [cartData, cartDataChange] = useState()
    let totalPrice = 0;
    console.log('test', newOrder);
    useEffect(() => {
        fetch("http://localhost:3001/countries")
            .then((res) => res.json())
            .then((resp) => countryDataChange(resp))
            .catch((err) => console.log(err.message));
    }, [newOrder]);
    useEffect(() => {
        fetch("http://localhost:3001/carts").then((res) => res.json())
            .then((resp) => cartDataChange(resp)).catch((err) => console.log(err.message))
    }, [newOrder]);


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json").then((res) => res.json())
            .then((resp) => {
                provincesChange(resp)
            }).catch((err) => console.log(err.message))
    }, []);

    newOrder && newOrder.products.map((x) => (
        totalPrice = totalPrice + (x.discountPrice * x.quantity)
    ))
    const handleSaleCode = () => {
        if (discountCode !== "") {
            fetch("http://localhost:3001/sale_code/?code=" + discountCode).then((res) => res.json())
                .then((resp) => {
                    salePriceChange(resp[0].sale_price)
                    if (resp != null) {
                        discountCodeChange("")
                        checkSaleCodeChange(false)
                    }
                }).catch((err) => {
                    console.log(err.message)
                    salePriceChange(0)
                    checkSaleCodeChange(true)
                })
        } else {
            checkSaleCodeChange(true)
        }
    }
    const handleSubmit = async () => {
        if (email === "" || fullName === "" || phoneNumber === "" || address === "" || ward === "") {
            alert("Vui lòng nhập đầy đủ thông tin!")
        } else {
            const fullInformationOrder = {
                ...newOrder,
                "address": address,
                "phone": phoneNumber
            }
            try {
                await axios.post(`http://localhost:8888/create-newOrder`, fullInformationOrder)
                alert("Thanh toán thành công")
            } catch (error) {
                console.log(error);
            }

        }
    }

    return (
        <div className="payment">

            <form className="d-flex form-pay" onSubmit={() => handleSubmit()}>
                <div className="right-pay d-flex">
                    <div className="right-form">
                        <h3 className="title-cart"><a href="/">Theme Trang
                            Sức</a></h3>
                        <div className="d-flex justify-content-between">
                            <h5>Thông tin nhận hàng</h5>
                            <a href=""
                                className="text-decoration-none d-flex align-items-center"
                                style={{ color: "#2a9dcc" }}><VscAccount
                                    style={{ marginRight: "5px" }} /> Đăng nhập</a>
                        </div>
                        <input type="email" required={true}
                            className="input-border d-block"
                            placeholder="Email" value={email}
                            onChange={(event) => emailChange(event.target.value)}

                        />
                        <input type="text" required placeholder="Họ và tên"
                            className="input-border d-block" value={fullName}
                            onChange={(event) => fullNameChange(event.target.value)} />
                        <div className="d-flex input-border">
                            <input type="tel"
                                value={phoneNumber}
                                required pattern="[0-9]{10}"
                                placeholder="Số điện thoại (tùy chọn)"
                                style={{ outline: "none", width: "85%" }}
                                onChange={event => phoneNumberChange(event.target.value)}
                            />
                            <div className="dropdown d-flex"
                                style={{ width: "15%", borderRadius: "5px" }}>
                                <button
                                    className="select-country dropdown-toggle"
                                    type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" style={{
                                        width: "100%",
                                        borderRadius: "5px",
                                        borderLeft: "1px solid lightgrey"
                                    }}>
                                    <span
                                        className={`flag-icon flag-icon-${selectedCountry}`}></span>
                                </button>
                                <ul className="dropdown-menu scrollable-menu"
                                    data-bs-spy="scroll">
                                    <li><a className="dropdown-item"
                                        href="#"
                                        onClick={() => selectedCountryChange("vn")}>
                                        <span>Vietnam (+84)</span></a></li>
                                    {
                                        countryData && countryData.filter(x => x.name !== "Vietnam").map((x) => (
                                            <li><a className="dropdown-item"
                                                href="#"
                                                onClick={() => selectedCountryChange(x.code.toLowerCase())}>
                                                <span>{x.name} ({x.dial_code})</span></a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <input type="text" required
                            className="input-border d-block"
                            placeholder="Địa chỉ (tùy chọn)" value={address}
                            onChange={(event) => addressChange(event.target.value)} />
                        <select className="d-block minimal input-border"
                            required
                            onChange={(e) => provinceChange(e.target.value)}>
                            <option selected value="">Tỉnh thành</option>
                            {
                                provinces && provinces.map((item) => (
                                    <option key={item.Id}
                                        value={item.Id}>{item.Name}</option>
                                ))
                            }
                        </select>
                        <select className="d-block minimal input-border"
                            required name=""
                            id=""
                            onChange={event => wardCodeChange(event.target.value)}>
                            <option value="">Quận/huyện</option>
                            {
                                provinces && provinces.map((item) => (
                                    item.Id === province ? item.Districts.map((e) => (
                                        <option key={e.Id}
                                            value={e.Name}>{e.Name}</option>
                                    )) : null
                                ))
                            }
                        </select>
                        <textarea className="d-block input-border"
                            placeholder="Ghi chú (tùy chọn)"></textarea>
                    </div>
                    <div className="left-form">
                        <div className="expense">
                            <div className="ship-ep">
                                <h5>Vận chuyển</h5>
                                {
                                    province !== ""
                                        ? <div
                                            className="d-flex justify-content-between align-items-center ">
                                            <div className="form-check"
                                                style={{ marginBottom: "0" }}>
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                    checked={true} />
                                                <label className="form-check-label"
                                                    htmlFor="flexRadioDefault1">
                                                    Giao hàng tận nơi
                                                </label>
                                            </div>
                                            <p className="price-40">40.000₫</p>
                                        </div>
                                        : <div className="check-ship">
                                            <p>Vui lòng nhập thông tin giao hàng</p>
                                        </div>
                                }
                            </div>
                            <div className="pay-fl">
                                <h5>Thanh toán</h5>
                                <div className="d-flex">
                                    <div className="form-check"
                                        style={{ marginBottom: "0" }}>
                                        <input className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault2"
                                            id="flexRadioDefault2"
                                            style={{ marginTop: "0" }}
                                            checked={payOnDelivery}
                                            onClick={() => payOnDeliveryChange(!payOnDelivery)}
                                        />
                                        <label className="form-check-label"
                                            htmlFor="flexRadioDefault2">
                                            Thanh toán khi giao hàng (COD)
                                        </label>
                                    </div>
                                    <FaRegMoneyBill1 color="#1990c6"
                                        style={{ margin: "auto 0" }}
                                        size={25} />
                                </div>
                                <div className="checked-pay">
                                    {
                                        payOnDelivery ? <p>cod</p> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-pay">
                    <div className="bd-left-pay">
                        <h5>Đơn hàng
                            ({(newOrder == null ? 0 : Object.keys(newOrder).length)} sản
                            phẩm)</h5>
                    </div>
                    <div className="db-left-btm">
                        <div className="item-product-pay">
                            {
                                newOrder && newOrder.products.map((x) => (
                                    <div
                                        className="d-flex justify-content-between align-items-center item-cart-pay">
                                        <div>
                                            <button type="button"
                                                className="img-item-pay btn btn-link position-relative">
                                                <img src={x.img}
                                                    alt={x.productName}
                                                    className="position-relative" />
                                                <span
                                                    className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-primary">{x.quantity}</span>
                                            </button>
                                            <span>{x.productName}</span>
                                        </div>
                                        <span>{new Intl.NumberFormat('vi', {
                                            currency: 'VND'
                                        }).format(x.discountPrice * x.quantity)}₫</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="sale-code">
                            <div className="d-flex">
                                <input type="text"
                                    placeholder="Nhập mã giảm giá"
                                    value={discountCode}
                                    className="d-block"
                                    onChange={event => discountCodeChange(event.target.value)}
                                />
                                <button type="button"
                                    onClick={() => handleSaleCode()}
                                    className="btn btn-primary">Áp dụng
                                </button>
                            </div>
                            {salePrice === 0 && checkSaleCode &&
                                <span style={{ color: "red", fontSize: "14px" }}>Mã giảm giá không tồn tại!</span>}

                        </div>
                        <div className="text-price">
                            <div
                                className="text-pay-price d-flex justify-content-between">
                                <span>Tạm tính</span>
                                <span>{new Intl.NumberFormat('vi', {
                                    currency: 'VND'
                                }).format(totalPrice)}₫</span>
                            </div>

                            {salePrice === 0 ? null : <div
                                className="text-pay-price d-flex justify-content-between">
                                <span>Giảm giá</span>
                                <span>{new Intl.NumberFormat('vi', {
                                    currency: 'VND'
                                }).format(salePrice)}%</span>
                            </div>
                            }
                            <div
                                className="text-pay-price d-flex justify-content-between">
                                <span>Phí vận chuyển</span>
                                <span>{province === "" ? 0 : "40.000"}₫</span>
                            </div>
                        </div>
                        <div className="text-price"
                            style={{ borderBottom: "none" }}>
                            <div
                                className="text-pay-price d-flex justify-content-between">
                                <span style={{
                                    fontSize: "18px",
                                    marginBottom: "10px"
                                }}>Tổng cộng</span>
                                <span className="total-price">{
                                    province === ""
                                        ? new Intl.NumberFormat('vi', { currency: 'VND' }).format(totalPrice - (totalPrice * (salePrice / 100)))
                                        : new Intl.NumberFormat('vi', { currency: 'VND' }).format(totalPrice + 40000 - (totalPrice * (salePrice / 100)))}₫
                                </span>
                            </div>
                            <div
                                className="text-pay-price d-flex justify-content-between align-items-center">
                                <a href="/cart-detail"
                                    className="d-flex text-decoration-none"><MdOutlineArrowBackIos
                                        style={{ margin: "auto 0" }} /> Quay về giỏ
                                    hàng</a>
                                <button type="submit"
                                    className="btn btn-primary">Đặt hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Payment
