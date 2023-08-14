import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

function Search() {
    return (
        <div className='search-container'>
            <input type="text" placeholder='Bạn cần tìm gì hôm nay ?' />
            <AiOutlineSearch size={20} />
        </div>
    )
}

export default Search