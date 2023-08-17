import React from 'react'
import List from './List'
import './LeftBar.css'
import Sort from './Sort'
import SortType from './SortType'
import SortColor from './SortColor'
import SortBranch from './SortBranch'
import ProductHot from './ProductHot'
function LeftBar() {
    return (
        <div className='leftBarContainer'>
            <h1 className='BigContent'>Danh mục</h1>
            <List></List>
            <Sort></Sort>
            <SortType></SortType>
            <SortColor></SortColor>
            <SortBranch></SortBranch>
            <ProductHot></ProductHot>
        </div>
    )
}

export default LeftBar
