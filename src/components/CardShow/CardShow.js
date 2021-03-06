import React from 'react';
import './CardShow.css';
import '../../icons.css';

const CardShow = ({ article, renderArticle, deleteArticle }) => {
    return (
        <li className="card">
            <div className="delete">
                <a href="#" onClick={() => deleteArticle(article.id)}><span className="fi-x"></span></a>
            </div>
            <div className="card-content">
                <img src={article.image} alt="" className="author-image" />
                <h3><a onClick={() => renderArticle(article.id)}>{article.name}</a></h3>
            </div>
        </li>
    )
}


export default CardShow;