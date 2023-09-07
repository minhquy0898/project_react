import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import './Search.css'
function Search() {
    return (
        <div className='search-container'>
            <input className='search' type="text" placeholder='Search...' />
            <AiOutlineSearch size={20} className='icon_search' />
        </div>
    )
}

export default Search