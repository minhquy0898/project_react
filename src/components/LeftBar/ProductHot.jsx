import React from 'react';
import axios from 'axios';
import './Sort.css'
import { useEffect, useState } from 'react';
function ProductHot() {
    const [product, setProduct] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/ProductHot');
            setProduct(response.data)

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
        console.log('productHot', product);
    }, []);
    return (
        <div style={{ marginTop: 25 }}>
            <h2 className='titleColor'>Sản phẩm nổi bật</h2>
            <div>
                {product.map((item) => {
                    return (
                        <div key={item.id} className='product1'>
                            <img src={item.img} alt="" />
                            <div style={{ marginLeft: 15 }}>
                                <button style={{ display: 'flex', justifyContent: `left` }}>
                                    <h4 style={{ display: 'flex', justifyContent: `left` }} className='nameProductHot'>{item.name}</h4>
                                </button>
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
