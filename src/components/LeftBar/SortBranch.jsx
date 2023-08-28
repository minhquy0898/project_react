import React from 'react'
import './Sort.css'
function SortBranch() {
    return (
        <div>
            <h2 className='Bigtitle'>Theo thương hiệu</h2>
            <div className='pickSort'>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    Bảo Kim
                </div>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    DQDT
                </div>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    Ngân Hoàng
                </div>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    SieuNhan
                </div>
                <div>
                    <input type="checkbox" className='Checkbox' />
                    TCO
                </div>
            </div>
            <hr />
        </div>
    )
}

export default SortBranch
