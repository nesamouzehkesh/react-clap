import React from 'react';
import './Header.css';
import '../../icons.css';
import Search from '../Search/Search';

const Header = ({
        currentArticle,
    data,
    changeHandler,
    addHandler,
    editHandler,
    showArticle,
    showAddForm,
    toggle
    }) =>
    (
        <div >
            {Object.keys(currentArticle).length == 0 && !toggle ?
                !showAddForm ?
                    <div className="header-container">
                        <div className="fi-paw">
                            <p>Collection Search:</p>
                        </div>
                        <Search data={data} changeHandler={changeHandler} />
                        <div className="fi-plus" onClick={addHandler}>{` Add`}</div>
                    </div>
                    /* otherwise you have clicked on `add` */
                    :
                    <div className="header-container">
                        <div className="fi-paw">
                            <p>Your New Article:</p>
                        </div>
                    </div>

                :
                !showAddForm && toggle ?
                    <div className="header-container">
                        <div className="fi-paw">
                            <p>Article Id: {currentArticle.id}</p>
                        </div>
                        <div className="fi-page-edit" onClick={() => editHandler(currentArticle)}>{` Edit`}</div>
                    </div>
                    :
                    showAddForm && toggle ?
                        <div className="fi-paw">
                            <p>Article Id: {currentArticle.id}</p>
                        </div>
                        :
                        <div className="header-container">
                            <div className="fi-paw">
                                <p>Collection Search:</p>
                            </div>
                            <Search data={data} changeHandler={changeHandler} />
                            <div className="fi-plus" onClick={addHandler}>{` Add`}</div>
                        </div>
            }
        </div>
    )

export default Header;