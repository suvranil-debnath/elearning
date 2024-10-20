import React from 'react';
import './SearchBar.css';
import { FiSearch } from "react-icons/fi";


const SearchBar = () => {
    return (
        <div className='row'>
        <div className="col-lg-5 col-md-9 col-sm-12 search-bar">
            <input type="text" placeholder="Search Courses" />
            <button type="submit"><FiSearch className='search-icon'/></button>
        </div>
        </div>
    );
}

export default SearchBar;