import React from 'react';
import './Header.css';
import '../../icons.css';
import Search from '../Search/Search';

const Header = ({
    currentArticle,
    data,
    changeHandler,
    showAddEditFormHandler,
    showArticle,
    showForm
}) =>
    (
        <div >
            {currentArticle == null ?
                !showForm ?
                    /** that means you are on the main page */
                    <div className="header-container">
                        <div className="fi-paw">
                            <p>Collection Search:</p>
                        </div>
                        <Search data={data} changeHandler={changeHandler} />
                        <div className="fi-plus" onClick={showAddEditFormHandler}>{` Add`}</div>
                    </div>
                    /* otherwise you have clicked on `add` */
                    :
                    <div className="header-container">
                        <div className="fi-paw">
                            <p>Your New Article:</p>
                        </div>
                    </div>
                :
                !showForm ?
                    /** not on main page AND: */
                    /** viewing an article details but have not clicked on `edit` yet */
                    <div className="header-container">
                        <div className="fi-paw">
                            <p>Article Id: {currentArticle.id}</p>
                        </div>
                        <div className="fi-page-edit" onClick={showAddEditFormHandler}>{` Edit`}</div>
                    </div>
                    :
                    /** on edit page of an article */
                    <div className="fi-paw">
                        <p>Article Id: {currentArticle.id}</p>
                    </div>
            }
        </div>
    )

export default Header;