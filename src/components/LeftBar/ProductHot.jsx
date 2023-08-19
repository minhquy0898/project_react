import React from 'react';
import axios from 'axios';
import './Sort.css'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
function ProductHot() {
    const [productHot, setProductHot] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/ProductHot');
            setProductHot(response.data)

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div style={{ marginTop: 25 }}>
            <h2 className='titleColor'>Sản phẩm nổi bật</h2>
            <div>
                {productHot.map((item) => {
                    return (
                        <div key={item.id} className='product1'>
                            <img src={item.img} alt="" />
                            <div style={{ marginLeft: 15 }}>
                                <NavLink to={'/product/:productId'} style={{ display: 'flex', justifyContent: `left` }} className='nameProductHot'>{item.name}</NavLink>
                                <p style={{ color: '#7FCBC9' }}>{item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductHot
