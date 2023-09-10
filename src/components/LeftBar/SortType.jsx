import React, { useContext, useState } from 'react'
import './Sort.css'
import { ProductContext } from '../Context/ProductContextProvider'
function SortType() {
    const { selectType, handleClick, filterProduct } = useContext(ProductContext)
    return (

        <div>
            <h2 className='Bigtitle'>Theo loại</h2>
            <div className='pickSort'>
                <div>
                    <input type="checkbox" className='Checkbox'
                        onChange={handleClick}
                        value={`Bông tai`}
                        checked={selectType.includes("Bông tai")} />
                    Bông tai
                </div>
                <div>
                    <input type="checkbox" className='Checkbox'
                        onChange={handleClick}
                        value={`Nhẫn`}
                        checked={selectType.includes("Nhẫn")} />
                    Nhẫn
                </div>
                <div>
                    <input type="checkbox" className='Checkbox'
                        onChange={handleClick}
                        value={`Vòng cổ`}
                        checked={selectType.includes("Vòng cổ")} />
                    Vòng cổ
                </div>
                <div>
                    <input type="checkbox" className='Checkbox'
                        onChange={handleClick}
                        value={`Vòng tay`}
                        checked={selectType.includes("Vòng tay")} />
                    Vòng tay
                </div>
            </div>
            <hr />
        </div>
    )
}

export default SortType
