import React from 'react'
import './Sort.css'
function SortColor() {
    return (
        <div>
            <h2 className='Bigtitle'>Theo màu sắc</h2>
            <div className='colorGroup'>
                <button className='btn' style={{ marginRight: 10, width: 20, height: 20, backgroundColor: 'yellow' }} />
                <button className='btn' style={{ marginRight: 10, width: 20, height: 20, backgroundColor: '#16F05E' }} />
                <button className='btn' style={{ marginRight: 10, width: 20, height: 20, backgroundColor: '#31BFDF' }} />
                <button className='btn' style={{ marginRight: 10, width: 20, height: 20, backgroundColor: '#898989' }} />
                <button className='btn' style={{ marginRight: 10, width: 20, height: 20, backgroundColor: '#FF0801' }} />
            </div>
            <hr />
        </div>
    )
}

export default SortColor
