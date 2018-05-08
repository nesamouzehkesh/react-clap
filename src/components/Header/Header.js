import React from 'react';
import './Header.css';
import '../../icons.css';
import Search from '../Search/Search';

const Header = ({ title, add, data, changeHandler, addHandler }) => (
    <div className="header-container">
        <div className="fi-paw">
            <p>{title}</p>
        </div>
        <Search data={data} changeHandler={changeHandler} />
        <div className="fi-plus" onClick={addHandler}>{` ${add}`}</div>
    </div>
)

export default Header;