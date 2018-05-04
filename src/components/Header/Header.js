import React from 'react';
import './Header.css';
import '../../icons.css';

const Header = ({ title }) => (
    <div className="header-container">
        <div className="fi-paw">
            <p>{title}</p>
        </div>
        <input className="search-input" />
    </div>
)

export default Header;