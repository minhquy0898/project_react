import React from 'react'
import './List.css'
import dropdown from '../../img/angle-small-down.png'
import blog from '../../img/blog-text.png'
import phone from '../../img/phone-call.png'
import product from '../../img/box-open.png'
import introduce from '../../img/hand-wave.png'
import home from '../../img/house-chimney.png'
import { useState } from 'react'
function List() {
    const [isDisplay, setIsDisplay] = useState(false)
    const handleClick = () => {
        setIsDisplay(!isDisplay)
    }
    return (
        <div>
            <ul className='List'>
                <li className='item'>
                    <div style={{ display: 'flex' }}>
                        <img src={home} alt="" style={{ width: `20px`, height: `20px`, marginRight: 5 }} />
                        <button style={{ marginBottom: 15 }}>Home</button>
                    </div>
                    <hr />
                </li>
                <li className='item'>
                    <div style={{ display: 'flex', alignItems: `center`, marginBottom: `10px`, justifyContent: `space-between` }}>
                        <div style={{ display: 'flex' }}>
                            <img src={product} alt="" style={{ width: `20px`, height: `20px`, marginRight: 5 }} />
                            <button style={{}}>Sản phẩm</button>
                        </div>
                        <button onClick={() => { handleClick() }}>
                            <img src={dropdown} alt="" style={{ width: `20px`, height: `20px` }} />
                        </button>
                    </div>
                    <ul className={(isDisplay) ? 'Display' : 'none'}>
                        <li className='ProductType'>
                            <button style={{ marginBottom: 15 }}>Nhẫn</button>
                            <hr />
                        </li>
                        <li className='ProductType'>
                            <button style={{ marginBottom: 15 }}>Bông tai</button>
                            <hr />
                        </li>
                        <li className='ProductType'>
                            <button style={{ marginBottom: 15 }}>Dây chuyền</button>
                            <hr />
                        </li>
                        <li className='ProductType'>
                            <button style={{ marginBottom: 15 }}>Trâm cài</button>
                            <hr />
                        </li>
                    </ul>
                    <hr className={(isDisplay) ? 'none' : ''} />
                </li>
                <li className='item'>
                    <div style={{ display: 'flex' }}>
                        <img src={blog} alt="" style={{ width: `20px`, height: `20px`, marginRight: 5 }} />
                        <button style={{ marginBottom: 15 }}>Blog</button>
                    </div>
                    <hr />
                </li>

                <li className='item'>
                    <div style={{ display: 'flex' }}>
                        <img src={phone} alt="" style={{ width: `20px`, height: `20px`, marginRight: 5 }} />
                        <button style={{ marginBottom: 50 }}>Liên hệ</button>
                    </div>
                    <hr />
                </li>

            </ul>
        </div>
    )
}

export default List
