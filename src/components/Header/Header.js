import React from 'react';
import './Header.css';
import '../../icons.css';
import Search from '../Search/Search';

const Header = ({ title, add }) => (
    <div className="header-container">
        <div className="fi-paw">
            <p>{title}</p>
        </div>
        <Search />
        <div className="fi-plus">{` ${add}`}</div>
    </div>
)

export default Header;