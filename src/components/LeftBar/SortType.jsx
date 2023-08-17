import React from 'react'
import './Sort.css'
function SortType() {
    return (
        <div>
            <h2 className='Bigtitle'>Theo loại</h2>
            <div className='pickSort'>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    Bông tai
                </div>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    Nhẫn
                </div>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    Vòng cổ
                </div>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    Vòng tay
                </div>
            </div>
            <hr />
        </div>
    )
}

export default SortType
