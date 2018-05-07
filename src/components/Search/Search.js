import React from 'react';
import '../../icons.css';
import './Search.css';

const Search = ({ term, data, changeHandler }) => (

    <input className="search-input" onChange={(e) => changeHandler(e.target.value)} />
)

export default Search;