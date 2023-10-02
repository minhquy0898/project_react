import React, { useEffect } from 'react'
import { useState } from 'react';
import './Manage.css'
import axios from 'axios';
import Cookies from 'js-cookie';
import 'rsuite/dist/rsuite.min.css';
import { Steps } from 'rsuite';
function Management() {
    const [activeStep, setActiveStep] = useState(0);
    const [filterCart, setFilterCart] = useState([])
    const token = Cookies.get('data')
    const HandleRenderOrder = async () => {
        const response = await axios.get(`http://localhost:8888/getOrder`)
        const orders = [response.data]
        const filter = orders.filter(cart => cart.userid === token.userid)
        setFilterCart(filter)
    }
    useEffect(() => {
        HandleRenderOrder()
    }, [])
    console.log(filterCart);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Đơn hàng của bạn</h2>
            {filterCart.map((cart, index) => (
                <div key={index} style={{ border: '1px solid', padding: 15, margin: '15px 0px' }}>
                    {cart.products.map((item) => (
                        <div key={item.productId}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div>Tên sản phẩm: {item.name}</div>
                                <div>SL: {item.quantity}</div>
                            </div>
                        </div>
                    ))}
                    <Steps current={cart.status}>
                        <Steps.Item title="Chờ xác nhận" />
                        <Steps.Item title="Đặt hàng thành công" />
                        <Steps.Item title="Chờ giao hàng" />
                        <Steps.Item title="Giao hàng thành công" />
                    </Steps>
                </div>
            ))}
        </div>

    );
}

export default Management;
