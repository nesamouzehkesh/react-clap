import React from 'react';
import './Header.css';
import '../../icons.css';

const Header = ({ title, add }) => (
    <div className="header-container">
        <div className="fi-paw">
            <p>{title}</p>
        </div>
        <input className="search-input" />
        <div className="fi-plus">{` ${add}`}</div>
    </div>
)

export default Header;