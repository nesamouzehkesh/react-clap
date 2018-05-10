import React from 'react';
import './Header.css';
import '../../icons.css';
import Search from '../Search/Search';

const Header = ({ currentArticle, data, changeHandler, addHandler, showArticle }) => {
    return (
        <div >
            {!showArticle ?
                <div className="header-container">
                    <div className="fi-paw">
                        <p>Collection Search:</p>
                    </div>
                    <Search data={data} changeHandler={changeHandler} />
                    <div className="fi-plus" onClick={addHandler}>{` Add`}</div>
                </div>
                :
                <div className="fi-paw">
                    <p>Article Id: {currentArticle.id}</p>
                </div>
            }
        </div>
    )
}

export default Header;