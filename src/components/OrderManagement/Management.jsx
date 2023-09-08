import MultiStep from 'react-multistep'
import React, { useEffect } from 'react'
import { useState } from 'react';
import './Manage.css'
import axios from 'axios';
import Cookies from 'js-cookie';
<<<<<<< HEAD
import 'rsuite/dist/rsuite.min.css';
import { Steps } from 'rsuite';

=======
>>>>>>> 0adf9b4e245eaa40cec581a50be1af336a35397e
function Management() {
    const [activeStep, setActiveStep] = useState(0);
    const [filterCart, setFilterCart] = useState([])
    const username = Cookies.get('jwt')
    const HandleRenderOrder = async () => {
        const response = await axios.get(`http://localhost:3001/carts`)
        const filterCart = response.data.filter(cart => cart.username === username)
        setFilterCart(filterCart)
    }
    useEffect(() => {
        HandleRenderOrder()
    }, [activeStep])
    console.log(filterCart);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Đơn hàng của bạn</h2>
            {filterCart.map((cart, index) => (
                <div key={index} style={{ border: '1px solid', padding: 15, margin: '15px 0px' }}>
                    {cart.product.map((item) => (
                        <div key={item.id}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div>Tên sản phẩm: {item.name}</div>
                                <div>SL: {item.quantity}</div>
                            </div>
                            {/* Các thông tin khác về sản phẩm */}
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
