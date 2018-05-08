import React from 'react';
import './Search.css';

const Search = ({ data, changeHandler }) => (

    <input className="search-input" onChange={(e) => changeHandler(e.target.value)} />
)

export default Search;