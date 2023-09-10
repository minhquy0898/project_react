import React from 'react'
import './Catagory.css'
function Catagory() {
    const location = window.location.pathname
    let locationArray = location.split("/")
    locationArray.shift()
    return (
        <div className='catagoryContainer'>
            <p className='changeColor'>Trang chủ</p>
            {locationArray.map((item, index) => {
                return (
                    <div key={index} style={{ display: 'flex' }}>
                        <p>{'>'}</p>
                        <p className='textColor'>{item}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Catagory
