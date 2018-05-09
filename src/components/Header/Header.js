import React from 'react';
import './Header.css';
import '../../icons.css';
import Search from '../Search/Search';

const Header = ({ title, add, data, changeHandler, addHandler, showArticle }) => {
    return (
        <div className="header-container">
            <div className="fi-paw">
                <p>{title}</p>
            </div>
            <Search data={data} changeHandler={changeHandler} />
            {!showArticle ?
                <div className="fi-plus" onClick={addHandler}>{` ${add}`}</div>
                :
                <div className="edit-plus-container">
                    <div className="fi-plus" onClick={addHandler}>{` ${add}`}</div>
                    <div className="fi-page-edit">Edit</div>
                </div>
            }
        </div>
    )
}

export default Header;