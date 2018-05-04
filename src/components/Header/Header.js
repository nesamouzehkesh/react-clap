import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';

const Header = ({ title }) => (
    <div className="title">
        <Logo />
        {title}
    </div>
)

export default Header;